const express = require('express'),
	router = express.Router({ mergeParams: true }),
	projects = require('../models/projects'),
	checkAuth = require('../middleware/checkAuth'),
	imageUpload = require('../helpers/imageUpload');

/**
 * @route /api/projects/
 * @description get all projects
 * @access Public 
 */
router.get('/', (req, res) => {
	projects.find({}, (err, projects) => {
		if (err) {
			console.log(err);
		} else {
			res.status(200).json(projects);
		}
	});
});

/**
 * @route /api/projects/PROJECT_URL
 * @description get single project
 * @access Public 
 */
router.get('/:projectURL', async (req, res) => {
	const { projectURL } = req.params;
	try {
		await projects.findOne({ url: projectURL }, (err, foundProject) => {
			if (err) {
				throw Error('Something went wrong');
			} else {
				res.status(200).json(foundProject);
			}
		});
	} catch (e) {
		res.status(403).json({ msg: e.message });
	}
});

/**
 * @route /api/projects/new
 * @description add new project
 * @access Private 
 */
router.post('/new', checkAuth, async (req, res) => {
	const { title, description, code, demo } = req.body;
	const url = `${req.protocol}://${req.get('host')}`;
	//destructure imageUpload helper function to keep code cleaner

	try {
		if (!req.files) throw Error('Please select an image');
		const { validateFile, fileName, uploadFile } = imageUpload(req.files.projectImg, title);

		//check if body inputs filled in, if not, throw error
		if (!title || !description || !code || !demo) throw Error('Please enter all of the fields');

		//check if project already exists, if title name already present, throw an error
		const projectExists = await projects.findOne({ titleSearch: title });
		if (projectExists) throw Error('Project with this name already exists');

		//use body object to create new project
		const newProject = new projects({
			title: title,
			titleSearch: title,
			url: title.replace(/[&\/\\#,+()$~%.'":*?<>/ /{}]/g, '_'),
			description: description,
			code: code,
			demo: demo,
			projectImg: `${url}/public/images/${fileName}`
		});

		//validate image, upload image, and save project to db
		validateFile();
		const createProject = await newProject.save();
		uploadFile();

		if (!createProject) throw Error('Something went wrong saving the project');

		res.status(200).json(createProject);
	} catch (e) {
		res.status(400).json({ msg: e.message });
		console.log(e.message);
	}
});

/**
 * @route /api/projects/PROJECT_URL
 * @description edit current project
 * @access Private 
 */
router.put('/:projectURL', checkAuth, async (req, res) => {
	const { projectURL } = req.params;
	const { title, description, code, demo } = req.body;
	const url = `${req.protocol}://${req.get('host')}`;

	try {
		const updateProject = {
			title: title,
			titleSearch: title,
			url: title.replace(/[&\/\\#,+()$~%.'":*?<>/ /{}]/g, '_'),
			description: description,
			code: code,
			demo: demo,
			projectImg: `${url}/public/images/`
		};

		projects.findOneAndUpdate({ url: projectURL }, updateProject, (err, updatedProject) => {
			if (err) {
				console.log(err);
				throw Error('Error updating the project');
			} else {
				res.status(200).json(updatedProject);
			}
		});

		// if(!addUpdatedProject) throw Error(`Project doesn't exist`);
	} catch (err) {
		res.status(400).json({ msg: e.message });
	}
});

/**
 * @route /api/projects/PROJECT_URL
 * @description delete a project
 * @access Private 
 */
router.delete('/:id', checkAuth, (req, res) => {
	const { id } = req.params;

	projects.findByIdAndRemove(id, (err) => {
		if (err) {
			res.status(403).json({ msg: 'Error removing project' });
		} else {
			res.status(200);
		}
	});
});

module.exports = router;

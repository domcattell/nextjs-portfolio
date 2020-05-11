const express = require('express'),
	router = express.Router({ mergeParams: true }),
	projects = require('../models/projects'),
	checkAuth = require('../middleware/checkAuth'),
	fileHelper = require('../helpers/imageUpload');

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

	try {
		//check if req.files exists
		if (!req.files) throw Error('Please select an image');

		//check if body inputs filled in, if not, throw error
		if (!title || !description || !code || !demo) throw Error('Please enter all of the fields');

		//check if project already exists, if title name already present, throw an error
		const projectExists = await projects.findOne({ titleSearch: title });
		if (projectExists) throw Error('Project with this name already exists');

		//destructure imageUpload helper function to keep code cleaner
		//uploadFile will validate the image and upload.
		const { fileName, uploadFile } = fileHelper.upload(title, req.files.projectImg);
		uploadFile();

		//use body to create new project
		const newProject = new projects({
			title,
			demo,
			code,
			description,
			titleSearch: title,
			url: title.replace(/[&\/\\#,+()$~%.'":*?<>/ /{}]/g, '_'),
			projectImg: `${url}/public/images/${fileName}`,
			imageName: fileName
		});

		//createProject will save project to db
		const createProject = await newProject.save();

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
	const { title, description, code, demo, projectImg, imageName } = req.body;
	const url = `${req.protocol}://${req.get('host')}`;

	try {
		//check if body inputs filled in, if not, throw error
		if (!title || !description || !code || !demo) throw Error('Please enter all of the fields');
		
		const projectExists = await projects.findOne({ titleSearch: title });
		if (projectExists) throw Error('Project with this name already exists');
		
		//image function checks if file is present in req.files
		//if present, runs the imageHelper upload function to replace
		//image. if no req.files exists, then runs the
		//imageHelper rename function to rename the file, based
		//on what the user posts back to the db.
		const image = () => {
			if (req.files) {
				const { fileName, uploadFile } = fileHelper.upload(title, req.files.projectImg);
				uploadFile();
				return {
					projectImg: `${url}/public/images/${fileName}`,
					imageName: fileName
				};
			} else {
				const { newFileName, renameFile } = fileHelper.rename(title, imageName);
				renameFile();
				return {
					projectImg: `${url}/public/images/${newFileName}`,
					imageName: newFileName
				};
			}
		};

		const updateProject = {
			title,
			code,
			demo,
			description,
			titleSearch: title,
			url: title.replace(/[&\/\\#,+()$~%.'":*?<>/ /{}]/g, '_'),
			projectImg: image().projectImg,
			imageName: image().imageName
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
		res.status(400).json({ msg: err.message });
		console.log(err);
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

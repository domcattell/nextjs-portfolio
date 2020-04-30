const express = require('express'),
	router = express.Router({ mergeParams: true }),
	projects = require('../models/projects'),
	checkAuth = require('../middleware/checkAuth'),
	multer = require('multer'),
	fs = require('fs'),
	path = require('path');

//get all projects (api/projects)
router.get('/', (req, res) => {
	projects.find({}, (err, projects) => {
		if (err) {
			console.log(err);
		} else {
			res.status(200).json(projects);
		}
	});
});

//get single project (api/projects/${id})
router.get('/:id', (req, res) => {
	const { id } = req.params;
	projects.findById(id, (err, foundProject) => {
		if (err) {
			res.status(403).json({ msg: 'something went wrong fetching this project' });
		} else {
			res.status(200).json(foundProject);
		}
	});
});

//helper object for uploading images
const imgUpload = {
	validate: (file) => {
		const format = file.mimetype;
		if (!file) {
			throw Error('Please select an image');
		} else if (format != 'image/png' && format != 'image/jpg' && format != 'image/jpeg') {
			throw Error('Please upload an image. PNG, JPG, and JPEG allowed');
		}
	},
	savedName: (file) => {
		console.log('test');
	},
	save: (file) => {
		//directory to save the image
		let fileName = file.name.replace(path.extname(file.name), '');
		let fileExt = path.extname(file.name);
		let newFileName = `${fileName}${fileExt}`;

		const FILE_DIR = './public/images/';
		let filePath = `${FILE_DIR}${newFileName}`;

		//use mv() function to upload image somewhere on the server
		if (fs.existsSync(filePath)) {
			// console.log("image already exists")
			newFileName = `${fileName}(${+1})${fileExt}`;
			filePath = `${FILE_DIR}${newFileName}`;
		}

		file.mv(filePath, (err) => {
			if (err) {
				console.log(err);
				throw Error('Something went wrong uploading the image');
			}
		});

		console.log(newFileName);
		console.log(filePath);
	}
};

/**admin access only routes */
//add new project (api/projects/new)
router.post('/new', checkAuth, async (req, res) => {
	const { title, description, code, demo } = req.body;
	const url = `${req.protocol}://${req.get('host')}`;
	try {
		let image = req.files.projectImg;
		if (!req.files) throw Error('Please select an image');
		//check if body inputs filled in, if not, throw error
		if (!title || !description || !code || !demo) throw Error('Please enter all of the fields');

		//check if project already exists, if title name already present, throw an error
		const titleCheck = title.toLowerCase();
		const projectExists = await projects.findOne({ titleCheck });
		if (projectExists) throw Error('Project with this name already exists');

		//use body object to create new project
		const newProject = new projects({
			title: title,
			description: description,
			code: code,
			demo: demo,
			projectImg: `${url}/public/images/${req.files.projectImg.name}`
		});

		//validate file is ok to be uploaded, then save to server
		imgUpload.validate(image);
		imgUpload.save(image);

		const createProject = await newProject.save();

		//if adding project unsuccessful, throw error
		if (!createProject) throw Error('Something went wrong saving the project');

		res.status(200).json(createProject);
	} catch (e) {
		res.status(400).json({ msg: e.message });
		console.log(e.message);
	}
});

//update project (api/projects/${id})
router.put('/:id', checkAuth, (req, res) => {
	const { id } = req.params;
	const { title, description, code, demo } = req.body;
	const updateProject = {
		title: title,
		description: description,
		code: code,
		demo: demo
	};

	projects.findByIdAndUpdate(id, updateProject, (err, updatedDeal) => {
		if (err) {
			res.status(403).json({ msg: 'Something went wrong updating this project' });
		} else {
			res.status(200).json(updatedDeal);
		}
	});
});

//delete project (api/projects/${id})
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

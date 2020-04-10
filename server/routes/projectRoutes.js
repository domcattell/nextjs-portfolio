const
    express = require('express'),
    router = express.Router({ mergeParams: true }),
    projects = require('../models/projects'),
    checkAuth = require('../middleware/checkAuth'),
    multer = require('multer'),
    imgDir = './public/images/'

//image upload w/ multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, imgDir)
    },
    filename: (req, file, cb)  => {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
}); 


//get all projects
router.get('/projects', (req, res) => {
    projects.find({}, (err, projects) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json(projects);
        };
    });
});

//get single project
router.get('/projects/:id', (req, res) => {
    const { id } = req.params;
    projects.findById(id, (err, foundProject) => {
        if (err) {
            res.status(403).json({ msg: "something went wrong fetching this project" });
        } else {
            res.status(200).json(foundProject);
        };
    });
});

////////////////////////////////
//**admin access only routes**//
///////////////////////////////

//add new project
router.post('/projects/new', checkAuth, upload.single('projectImg'), (req, res) => {
    const { title, description, code, demo } = req.body;
    const url = req.protocol + '://' + req.get('host')
    console.log(req.file)
    console.log(req.body)
    // save body to object to send to client
    const newProject = {
        title: title,
        description: description,
        code: code,
        demo: demo,
        projectImg: `${url}/public/images/${req.file.filename}`
    }

    //add new project to db
    projects.create(newProject, (err, addedProject) => {
        if (err) {
            res.status(403).json({ msg: "Error occurred adding project" });
        } else {
            res.status(200).json(addedProject);
        };
    });
});

//update project
router.put('/projects/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, code, demo } = req.body;
    const updateProject = {
        title: title,
        description: description,
        code: code,
        demo: demo,
    };

    projects.findByIdAndUpdate(id, updateProject, (err, updatedDeal) => {
        if (err) {
            res.status(403).json({ msg: "Something went wrong updating this project" });
        } else {
            res.status(200).json(updatedDeal);
        };
    });
});

//delete project
router.delete('/projects/:id', (req, res) => {
    const { id } = req.params;

    projects.findByIdAndRemove(id, (err) => {
        if (err) {
            res.status(403).json({ msg: "Error removing project" });
        } else {
            res.status(200);
        };
    });
});

module.exports = router;
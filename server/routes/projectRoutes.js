const
    express = require('express'),
    router = express.Router({ mergeParams: true }),
    projects = require('../models/projects'),
    checkAuth = require('../middleware/checkAuth');

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
router.post('/projects/new', checkAuth, (req, res) => {
    const { title, description, code, demo, created } = req.body;
    //save body to object to send to client
    const newProject = {
        title: title,
        description: description,
        code: code,
        demo: demo,
        created: created
    }

    //add new project to db
    projects.create(newProject, (err, addedProject) => {
        if (err) {
            res.status(403).json({ msg: "Error occurred adding project" });
        } else {
            res.status(200).json(newProject);
        };
    });
});

//update project
router.put('/projects/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, code, demo, created } = req.body;
    const updateProject = {
        title: title,
        description: description,
        code: code,
        demo: demo,
        created: created
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
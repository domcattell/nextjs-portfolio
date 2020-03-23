const express = require("express"),
    router = express.Router();
user = require("../models/user"),
    bcrypt = require("bcrypt"),
    jwt = require("jsonwebtoken")

const secret = "secret";

router.post("/admin/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        //find user, print json response if not found
        const loginUser = await user.findOne({ username });
        if (!loginUser) res.json({ msg: "user not found" });

        //compare body pass with db password using bcrypt
        const matched = await bcrypt.compare(password, loginUser.password);
        if (!matched) res.json({ msg: "incorrect credentials" });

        //assign token and expiration date
        const token = jwt.sign({ id: loginUser._id }, secret, { expiresIn: 3600 });
        if (!token) res.json({msg: "token error"});

        //send token as json to be used for auth in client
        res.status(200).json(token);
    } catch (e) {
        res.status(400).json({msg: "error occurred"});
    };
});

//register route. won't be used, and thus no error handling added
// router.post("/admin/register", async (req, res) => {
//     const {username, password} = req.body;

//     try {
//         const salt = await bcrypt.genSalt(10);
//         const hash = await bcrypt.hash(password, salt);

//         const newUser = new user({
//             username,
//             password: hash
//         })

//         const regiserUser = await newUser.save();

//         res.status(200);
//         console.log("Ok")
//     } catch (err) {
//         console.log(err)
//     }
// })

module.exports = router;
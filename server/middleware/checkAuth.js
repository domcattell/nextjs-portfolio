const jwt = require("jsonwebtoken");
const secret = "secret";

const authCheck = (req, res, next) => {
    const token = req.header('x-auth-token');

    if(!token) {
        res.status(401).json({msg: "No token"});
    } else {
        jwt.verify(token, secret, (err, decoded) => {
            if(err) {
                res.status(403).json({msg: "session expired"});
            } else {
                req.username = decoded.username
                next();
            };
        });
    };
};

module.exports = authCheck;
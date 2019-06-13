const jwt = require('jsonwebtoken');

module.exports = (req, res, next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token,'secret');
        req.userdata = decoded;
        next();

    }
    catch(error){
        res.send("AUTH FAILED").status(401);
    }
}
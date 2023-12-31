const jwt = require("jsonwebtoken");
const SECRETKEY = "NOTESAPI";

const auth = (req, res, next)=>{

    try {

        let token = req.headers.authorization;
        if(token){
            token = token.split(" ")[1];
            let user = jwt.verify(token, SECRETKEY );
            req.userId = user.id;
        }
        else{
            return res.status(401).json({message: "Unauthorized User"});
        }

        next();
        
    } catch (error) {
        console.log(error);
        res.status(401).json({message: "Unauthorized User"});
    }

}

module.exports = auth;
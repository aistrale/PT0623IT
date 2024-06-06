const jwt = require('jsonwebtoken');
const jwtSecretKey = process.env.JWT_SECRET_KEY;

//Middlewares
const authMiddleware = (req, res, next) => {
    /* console.log("Sono authMiddleware!!!") */
    let token = req.headers.authorization;

    if(!token) {
        return res.status(401).json({message: 'Invalid Token'})
    } else {
        token = token.split(' ')[1]; // {Authorization: Bearer jdlahgladkhlkahlkgfhaklhflkahdglkhdakhgkadh}
        jwt.verify(token, jwtSecretKey, (err, data) => {
            if(err) {
                return res.status(401).json({message: 'Invalid Token'})
            } else {
                console.log(data);
            }
        })
    }
    next();
}

module.exports = authMiddleware;
const jwt = require('jsonwebtoken');
const jwtSecretKey = 'jwt-secret-key';

//Middlewares
const authMiddleware = (req, res, next) => {
    /* console.log("Sono authMiddleware!!!") */
    let token = req.headers.authorization;

    if(!token) {
        return res.status(401).json({message: 'Invalid Token'})
    } else {
        token = token.split(' ')[1]
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
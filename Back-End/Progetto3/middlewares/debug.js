// Middleware custom
function logger(req, res, next) {
    console.log("Sono il middleware logger!!! URL: " + req.url);
    next();
}

function ceckApi(req, res, next) {
    const apiKey = req.query.key;
    if(apiKey !== 'qwerty') {
        res.status(401).send('Non Autorizzato!!!!')
    } else {
        next();
    }
}

function singleLog(req, res, next) {
    console.log("Sono il middleware singleLog!!!");
    next();
}

module.exports = {logger, ceckApi, singleLog};
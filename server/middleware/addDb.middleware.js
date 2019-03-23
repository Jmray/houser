const getDb = require("../db/bootstrap.database");


module.exports = function addDb(){
    return (req, res, next) => {
        getDb().then(db => {
            req.db = db;

            next();
        }).catch(() => {
            res.status(500).send('Error!');
        });
    };
}


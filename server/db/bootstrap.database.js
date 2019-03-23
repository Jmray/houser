const massive = require('massive');
require('dotenv').config({path: __dirname + '../.env' });

const {
    DB_CONNECTION_STRING
} = process.env;

let db;


module.exports = function getDb(){
    if(db){ return db }
    else{
        return(
            db = massive(DB_CONNECTION_STRING, {scripts: __dirname + '/scripts'})
                .catch(err => {
                    db = null;
                    throw err;
                })
        );
    }
}


require('dotenv').config({ path: __dirname + '../../../.env' });
const massive = require('massive');

massive(process.env.DB_CONNECTION_STRING, { scripts: __dirname + '../'})
    .then(dbInstance => {
        return dbInstance.query(
            );
    })
    .then(memes => {
        console.log(memes);
    })
    .catch(e => {
        console.error(e);
    });
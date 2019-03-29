require('dotenv').config({ path: __dirname + '../../../.env' });
const massive = require('massive');

massive(process.env.DB_CONNECTION_STRING, { scripts: __dirname + '../'})
    .then(dbInstance => {
        return dbInstance.create_houses_table;
    })
    .then(() => {
        console.log('created');
    })
    .catch(e => {
        console.error(e);
    });
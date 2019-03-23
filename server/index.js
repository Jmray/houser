// requiring into the app
require('dotenv').config({path: __dirname + '/.env'});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');



//requiring middle wares
const addDb = require('./middleware/addDb.middleware');

//requiring routers
const HouseRouter = require('./routers/HouseRouter');

//destruction of dotenv
const {
    PORT,
    
} = process.env;




//Initializing app
const app = express();

//middleware
app.use(bodyParser.json());
app.use(addDb());
app.use(cors());



//routes
app.use('/api/houses', HouseRouter);



//listening to the port
app.listen(PORT, () => console.log(`listening to port: ${PORT}`));
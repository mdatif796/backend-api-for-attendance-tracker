const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

// setting up database connection
const db = require('./config/databaseConnection');

app.use(bodyParser.urlencoded({extended: false}));




app.listen(port, function(err){
    if(err){
        console.log('Error in connecting with the express server!');
        return;
    }
    console.log('Express server is up and running on port: ', port);
    return;
});
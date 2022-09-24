const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

// setting up database connection
const db = require('./config/databaseConnection');

// setting up the passport-jwt-strategy
const passportJwtStrategy = require('./config/passport-jwt-strategy');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', require('./routes'));




app.listen(port, function(err){
    if(err){
        console.log('Error in connecting with the express server!');
        return;
    }
    console.log('Express server is up and running on port: ', port);
    return;
});
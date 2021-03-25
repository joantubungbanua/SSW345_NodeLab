//Require packages and set the port 

const routes = require('./routes/routes');
const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const port = 3002; 
const app = express(); 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,

}));



routes(app);

//Start the Server

const server = app.listen(port, (error) => {
    if(error) return console.log(`Error: ${error}`);

    console.log(`Server is listening on port ${server.address().port}`);


})


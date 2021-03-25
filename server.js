//Require modules
const express = require('express');
const { Server } = require('mongodb');
const morgan = require('morgan');
const { index } = require('./controllers');
const port = 3000
const path = require('path');
const indexRouter = require('./routes/index');
const careersRouter = require('./routes/careers');
const listsRouter = require('./routes/lists');


// Set up express app 
const app = express();

//Set up DB **- connecting to mongoose (8)
require('./config/database');

//Configure the app with app.set()
app.set('careers', path.join(__dirname, 'careers'));
app.set('view engine', 'ejs');

//Mount middleware with app.use()
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));




// Mount routes with app.use()
app.use('/', indexRouter);
app.use('/careers', careersRouter);
app.use('/dss', careersRouter);
app.use('/ses', careersRouter);
app.use('/uxuis', careersRouter);
app.use('/lists', listsRouter);




// Tell app to listen 
app.listen(port, function () {
    console.log(`Express is listening on port ${port}.`);
})

// **- After Server.js boilerplate set up we setup boiler plate for index.ejs (*)
// ** - Then we begin setup for our routes and controller actions (*)
// **- Next we require and mount our index router inside of server.js (see Require modules and Mount routes above) (5)
// **-Next we start up the app with nodemon and check for errors (6)
// **-After no errors we configure mongoose in database.js(7)
// **-NOTE TO SELF-** once database.js was set up, program autopopulated required {server} and {index} variables under required modules. server.js Set up DB section was entered manually.(8)
// **-Next we start up the app to check for errors. (9)
// **- After no errors go to database.js to set up event listeners from nodes EventEmitter to check for successful db connection. (10)
// **-After requiring and mounting careers router (13) Next we create the controller controllers/careers.js(14)




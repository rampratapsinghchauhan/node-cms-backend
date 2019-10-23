const express = require('express');
const app = express();

//Importing routes here
const productRoutes = require('./api/routes/product');
const orderRoutes = require('./api/routes/oders');
const userRoutes = require('./api/routes/user');
const menuRoutes = require('./api/routes/menu');

//Adding morgan
const morgan = require('morgan');
//
const bodyParser = require('body-parser');
 
//Adding database
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header("Access-Control-Allow-Origin",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(req === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
    }
    next();
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json());
app.use('/products', productRoutes);

app.use('/users', userRoutes);

app.use('/orders', orderRoutes);

app.use('/menuItems', menuRoutes);
// Error if nothing is found
app.use((req, res, next)=>{
    const error = new Error('Not found');
    error.status = 404;
    //we creaded the error and passed it to next route
    next(error);
});

//Error from anywhere in the project
app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error : error.message
    })
});

module.exports = app;
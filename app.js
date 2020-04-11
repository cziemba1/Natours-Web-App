const morgan = require('morgan');
const express = require('express');
const app = express();
const tourRouter = require('./routes/toursRoutes');
const userRouter = require('./routes/userRoutes');

//MIDDLEWARES

app.use(morgan('dev'));
app.use(express.json());

//ROUTES

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;

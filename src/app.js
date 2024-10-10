const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const userRoute = require('../routes/v1/userRoutes');
const expenseRoute = require('../routes/v1/expensesRoutes');
const categoryRoute = require('../routes/v1/categoryRoute')
const  app = express();



const corOptions = {
    origin: 'https://greenmark.com',
    methods: [ 'GET', 'POST', 'PUT', 'DELETE' ], // Change to match your need

};

app.use(cors(corOptions));
app.use(express.json());
app.use('/v1/users', userRoute);
app.use('/v1/expenses', expenseRoute);
app.use('/v1/category', categoryRoute)



module.exports = app
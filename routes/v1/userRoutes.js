const express = require('express');
const validateToken = require('../../middlewares/auth')

const { createUserHandler , getUserHandler, loginUserHandler} = require('../../controller/v1/userController')


const route = express.Router();

route.get('/:id',validateToken, getUserHandler);
route.post('', createUserHandler);
route.post('/login', loginUserHandler)



module.exports = route
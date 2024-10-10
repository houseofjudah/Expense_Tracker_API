const express = require('express');
const validateToken = require('../../middlewares/auth');

const routers = express.Router();

const {createCategoryHandler, updateCategoryHandler, deleteCategoryHandler, getCategoriesHandler,getCategoryHandler} = require('../../controller/v1/categoryController')


routers.post('', validateToken, createCategoryHandler);
routers.get('', getCategoriesHandler);
routers.get('/:id', getCategoryHandler);
routers.put('/:id',  validateToken, updateCategoryHandler);
routers.delete('/:id', validateToken, deleteCategoryHandler);





module.exports = routers
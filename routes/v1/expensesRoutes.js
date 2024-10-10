const express = require('express');
const validateToken = require('../../middlewares/auth');

const router = express.Router();

const {createExpenseHandler, getExpenseHandler, updateExpenseHandler, deleteExpenseHandler, getExpensesHandler} = require('../../controller/v1/expenseController');

router.post('/', createExpenseHandler);
router.delete('/:id', deleteExpenseHandler);
router.get('/:id', validateToken, getExpenseHandler);
router.get('/', validateToken, getExpensesHandler);
router.put('/:id', validateToken, updateExpenseHandler);


module.exports = router
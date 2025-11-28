const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const { validateCustomer } = require('../middleware/validation');

// GET /customers - List all customers
router.get('/', customerController.getAllCustomers);

// GET /customers/create - Display customer creation form
router.get('/create', customerController.getCreateForm);

// POST /customers - Create a new customer
router.post('/', validateCustomer, customerController.createCustomer);

// GET /customers/:id - View a specific customer
router.get('/:id', customerController.getCustomer);

module.exports = router;

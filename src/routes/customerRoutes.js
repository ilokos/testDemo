const express = require('express');
const rateLimit = require('express-rate-limit');
const router = express.Router();
const customerController = require('../controllers/customerController');
const { validateCustomer } = require('../middleware/validation');

// Rate limiter for API routes
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

// Apply rate limiting to all customer routes
router.use(apiLimiter);

// GET /customers - List all customers
router.get('/', customerController.getAllCustomers);

// GET /customers/create - Display customer creation form
router.get('/create', customerController.getCreateForm);

// POST /customers - Create a new customer
router.post('/', validateCustomer, customerController.createCustomer);

// GET /customers/:id - View a specific customer
router.get('/:id', customerController.getCustomer);

module.exports = router;

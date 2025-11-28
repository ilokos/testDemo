const Customer = require('../models/Customer');
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

// Display customer creation form
exports.getCreateForm = (req, res) => {
  res.render('customers/create', {
    title: 'Create Customer Profile',
    customer: {},
    errors: []
  });
};

// Create a new customer
exports.createCustomer = async (req, res) => {
  try {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).render('customers/create', {
        title: 'Create Customer Profile',
        customer: req.body,
        errors: errors.array()
      });
    }

    const customerData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      address: {
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode,
        country: req.body.country
      },
      dateOfBirth: req.body.dateOfBirth || null
    };

    const customer = new Customer(customerData);
    await customer.save();

    res.redirect('/customers');
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).render('customers/create', {
        title: 'Create Customer Profile',
        customer: req.body,
        errors: [{ msg: 'Email already exists' }]
      });
    }
    console.error('Error creating customer:', error);
    res.status(500).render('customers/create', {
      title: 'Create Customer Profile',
      customer: req.body,
      errors: [{ msg: 'An error occurred while creating the customer' }]
    });
  }
};

// List all customers
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find().sort({ createdAt: -1 });
    res.render('customers/list', {
      title: 'Customer List',
      customers
    });
  } catch (error) {
    console.error('Error fetching customers:', error);
    res.status(500).render('error', {
      title: 'Error',
      message: 'An error occurred while fetching customers'
    });
  }
};

// Get single customer by ID
exports.getCustomer = async (req, res) => {
  try {
    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).render('error', {
        title: 'Invalid ID',
        message: 'The customer ID format is invalid'
      });
    }

    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).render('error', {
        title: 'Not Found',
        message: 'Customer not found'
      });
    }
    res.render('customers/view', {
      title: `${customer.firstName} ${customer.lastName}`,
      customer
    });
  } catch (error) {
    console.error('Error fetching customer:', error);
    res.status(500).render('error', {
      title: 'Error',
      message: 'An error occurred while fetching the customer'
    });
  }
};

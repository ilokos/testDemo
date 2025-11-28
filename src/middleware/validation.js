const { body } = require('express-validator');

exports.validateCustomer = [
  body('firstName')
    .trim()
    .notEmpty().withMessage('First name is required')
    .isLength({ max: 50 }).withMessage('First name cannot exceed 50 characters')
    .escape(),
  
  body('lastName')
    .trim()
    .notEmpty().withMessage('Last name is required')
    .isLength({ max: 50 }).withMessage('Last name cannot exceed 50 characters')
    .escape(),
  
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please enter a valid email address')
    .normalizeEmail(),
  
  body('phone')
    .optional({ checkFalsy: true })
    .trim()
    .matches(/^[\d\s\-+()]*$/).withMessage('Please enter a valid phone number')
    .escape(),
  
  body('street')
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 100 }).withMessage('Street address cannot exceed 100 characters')
    .escape(),
  
  body('city')
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 50 }).withMessage('City cannot exceed 50 characters')
    .escape(),
  
  body('state')
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 50 }).withMessage('State cannot exceed 50 characters')
    .escape(),
  
  body('zipCode')
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 20 }).withMessage('Zip code cannot exceed 20 characters')
    .escape(),
  
  body('country')
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 50 }).withMessage('Country cannot exceed 50 characters')
    .escape(),
  
  body('dateOfBirth')
    .optional({ checkFalsy: true })
    .isISO8601().withMessage('Please enter a valid date')
    .toDate()
];

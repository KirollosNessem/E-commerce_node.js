const { check } = require('express-validator');

// const ValidatorMiddleware = require("../../middlewares/validatorMiddleware");

const getvalidateIdSubcategory = [
  check('id').isMongoId().withMessage('Invalid Subcategory Id'),
//   ValidatorMiddleware
];


const createvalidatorSubcategory = [
    check('name').notEmpty().withMessage('Subcategory required').isLength({min:2}).withMessage("To short Subcategory name").isLength({max:32}).withMessage("To long Subcategory name"),
    check('category').notEmpty().withMessage(`Subcategory mut be add`).isMongoId().withMessage('Invalid Category Id'),
   
  //  validatorMiddleware
  ];



  const updatevalidateIdSubcategory = [
    check('id').isMongoId().withMessage('Invalid Subcategory Id'),
  //   ValidatorMiddleware
  ];

  const deletevalidateIdSubcategory = [
    check('id').isMongoId().withMessage('Invalid Subcategory Id'),
    // ValidatorMiddleware
  ];
  
  
module.exports = { createvalidatorSubcategory,getvalidateIdSubcategory,updatevalidateIdSubcategory,deletevalidateIdSubcategory};

const { check } = require('express-validator');
// const ValidatorMiddleware = require("../../middlewares/validatorMiddleware");

const getvalidateIdCategory = [
  check('id').isMongoId().withMessage('Invalid Category Id'),
//   ValidatorMiddleware
];


const createvalidatorcategory = [
    check('name').notEmpty().withMessage('category required').isLength({min:3}).withMessage("To short category name").isLength({max:32}).withMessage("To long category name"),
  //   ValidatorMiddleware
  ];



  const updatevalidateIdCategory = [
    check('id').isMongoId().withMessage('Invalid Category Id'),
  //   ValidatorMiddleware
  ];

  const deletevalidateIdCategory = [
    check('id').isMongoId().withMessage('Invalid Category Id'),
  //   ValidatorMiddleware
  ];
  
  
module.exports = { getvalidateIdCategory ,createvalidatorcategory,updatevalidateIdCategory,deletevalidateIdCategory};

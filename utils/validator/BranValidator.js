const { check } = require('express-validator');
// const ValidatorMiddleware = require("../../middlewares/validatorMiddleware");

const getvalidateIdBrand = [
  check('id').isMongoId().withMessage('Invalid Brand Id'),
//   ValidatorMiddleware
];


const createvalidatorBrand = [
    check('name').notEmpty().withMessage('Brand required').isLength({min:3}).withMessage("To short Brand name").isLength({max:32}).withMessage("To long Brand name"),
  //   ValidatorMiddleware
  ];



  const updatevalidateIdBrand = [
    check('id').isMongoId().withMessage('Invalid Brand Id'),
  //   ValidatorMiddleware
  ];

  const deletevalidateIdBrand = [
    check('id').isMongoId().withMessage('Invalid Brand Id'),
  //   ValidatorMiddleware
  ];
  
  
module.exports = { getvalidateIdBrand ,createvalidatorBrand,updatevalidateIdBrand,deletevalidateIdBrand};

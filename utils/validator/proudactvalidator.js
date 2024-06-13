const { check } = require("express-validator");

exports.CreateProudactValidator = [
  check("title")
    .isLength({ min: 3 })
    .withMessage(`must be add moro than 3 characters`)
    .notEmpty()
    .withMessage(`producr required`),

  check("description")
    .notEmpty()
    .withMessage(`must product description required`)
    .isLength({ max: 2000 })
    .withMessage(`Too long description required`),
  check("quantity")
    .notEmpty()
    .withMessage(`must product quantity required`)
    .isNumeric()
    .withMessage(` the quantity must be Number`),
  check("sold")
    .optional()
    .isNumeric()
    .withMessage(` the quantity must be Number`),
  check("price")
    .notEmpty()
    .withMessage(`must product price required`)
    .isNumeric()
    .withMessage(` the price must be Number`)
    .isLength({ max: 32 })
    .withMessage(`Too long price `),
  check("priceAfterDiscount")
    .optional()
    .toFloat()
    .isNumeric()
    .withMessage(` the price must be Number`)
    .custom((value, { req }) => {
      if (req.body.price <= value) {
        throw new Error(`priceAfterDiscount must be lower than price`);
      }
      return true;
    }),

    check("colors").optional().isArray().withMessage(` available colors should be Array of strings`),
    check(`imagecover`).notEmpty().withMessage(` imagecaver is required`),
    check("images").optional().isArray().withMessage(` images  should be Array of strings`),
    check(`category`).notEmpty().withMessage(` categories should be Array of strings`).isMongoId().withMessage(`invalid categories id`),
    check(`subcategory`).optional().isMongoId().withMessage(`invalid subcategories id`),
    check(`brand`).optional().isMongoId().withMessage(`invalid  id format`),
    check('ratingsAverage')
    .optional()
    .isNumeric()
    .withMessage('ratingsAverage must be a number')
    .isLength({ min: 1 })
    .withMessage('Rating must be above or equal 1.0')
    .isLength({ max: 5 })
    .withMessage('Rating must be below or equal 5.0'),
  check('ratingsQuantity')
    .optional()
    .isNumeric()
    .withMessage('ratingsQuantity must be a number'),
  ]


  exports.GetProduct = [
    check("id").isMongoId().withMessage(`invalid id format`),
    
  ]


  exports.updateProduct =[
    check("id").isMongoId().withMessage(`invalid id format`),
  
  ]


  exports.deleteProduct =[
    check("id").isMongoId().withMessage(`invalid id format`),
  ]
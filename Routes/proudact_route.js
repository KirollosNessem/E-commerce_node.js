const express = require("express")
const router = express.Router()
const proudactservices = require("../services/prudactService")
const validatorMidleware = require("../middlewares/validatorMidleware")

const { param, validationResult } = require('express-validator');

const proudactValidator = require("../utils/validator/proudactvalidator")




// router.post("/",categoryservices.getcategory)
// router.post("/",categoryservices.CreateCategory)
router.route("/").get(proudactservices.getProduct).post(proudactValidator.CreateProudactValidator,validatorMidleware,proudactservices.CreateProduct)


// router.get("/:id",categoryservices.getcategorybyid)
router.route("/:id").get(proudactValidator.GetProduct,validatorMidleware,proudactservices.getProductbyid).put(proudactValidator.updateProduct,validatorMidleware,proudactservices.updateProduct).delete(proudactValidator.deleteProduct,validatorMidleware,proudactservices.delteProduct)


module.exports =router
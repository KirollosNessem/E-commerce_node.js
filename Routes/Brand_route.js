const express = require("express")
const router = express.Router()
const Brandservices = require("../services/brandservice")
const validatorMidleware = require("../middlewares/validatorMidleware")

const { param, validationResult } = require('express-validator');

const BrandValidator = require("../utils/validator/BranValidator")





// router.post("/",Brandservices.getcategory)
// router.post("/",Brandservices.CreateCategory)
router.route("/").get(Brandservices.getBrand).post(BrandValidator.createvalidatorBrand,validatorMidleware,Brandservices.CreateBrand)


// router.get("/:id",Brandservices.getcategorybyid)
router.route("/:id").get(BrandValidator.getvalidateIdBrand,validatorMidleware,Brandservices.getBrandbyid).put(BrandValidator.updatevalidateIdBrand,validatorMidleware,Brandservices.updateBrand).delete(BrandValidator.deletevalidateIdBrand,validatorMidleware,Brandservices.delteBrand)


module.exports =router
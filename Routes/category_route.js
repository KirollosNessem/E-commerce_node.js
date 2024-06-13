const express = require("express")
const router = express.Router()
const categoryservices = require("../services/categoryservice")
const validatorMidleware = require("../middlewares/validatorMidleware")

const { param, validationResult } = require('express-validator');

const categoreValidator = require("../utils/validator/categoryValidator")

const subctegoryroute = require("./Subcategory_route")
router.use("/:categoryId/subcategories",subctegoryroute)


// router.post("/",categoryservices.getcategory)
// router.post("/",categoryservices.CreateCategory)
router.route("/").get(categoryservices.getcategory).post(categoreValidator.createvalidatorcategory,validatorMidleware,categoryservices.CreateCategory)


// router.get("/:id",categoryservices.getcategorybyid)
router.route("/:id").get(categoreValidator.getvalidateIdCategory,validatorMidleware,categoryservices.getcategorybyid).put(categoreValidator.updatevalidateIdCategory,validatorMidleware,categoryservices.updatecategory).delete(categoreValidator.deletevalidateIdCategory,validatorMidleware,categoryservices.deltecategory)


module.exports =router
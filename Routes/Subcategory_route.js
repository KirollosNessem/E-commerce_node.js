const express = require("express")

// mergeParams: Allow us to assess parameters on other routers
const router = express.Router({mergeParams: true})
const Subcategoryservices = require("../services/SubcategoryServices")
const validatorMidleware = require("../middlewares/validatorMidleware")
const Subcategoryvalidation = require("../utils/validator/SubcategoryValidator")



router.route("/").post(Subcategoryvalidation.createvalidatorSubcategory,validatorMidleware, Subcategoryservices.CreateSubCategory).get(Subcategoryservices.subgetcategory);

router.route("/:id").get(Subcategoryvalidation.getvalidateIdSubcategory,validatorMidleware,Subcategoryservices.getsubcategorybyid).put(Subcategoryvalidation.updatevalidateIdSubcategory,validatorMidleware,Subcategoryservices.updatesubcategory).delete(Subcategoryvalidation.deletevalidateIdSubcategory,validatorMidleware,Subcategoryservices.deltesubcategory)
    
module.exports = router;
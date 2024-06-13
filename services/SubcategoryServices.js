const SubcategoryModel = require("../models/SubCategory_Model")
 const slugify = require("slugify")
 const asyncHandler = require('express-async-handler')

 const ApiError = require("../utils/apiError")



 // @desc   get Create SubCategory
// @route post /api/v1/subcategory
// @access   private
const CreateSubCategory =asyncHandler( async(req, res) => {
    const {name,category} = req.body;

    // Creating a new category with the provided name and slugifying it
 const subcategory=  await SubcategoryModel.create({ name: name, slug: slugify(name) ,category: category})
 res.status(201).json({ data: subcategory }); 
       
});






// @desc   get All subCategory
// @route get /api/v1/category
// @access   public
const subgetcategory =asyncHandler( async(req,res)=>{
    const page =req.query.page * 1||1;
    const limit = req.query.limit *1 ||  5;
    const skip =(page - 1)*limit;


    let fillteration ={};
    if(req.params.categoryId) {fillteration ={category:req.params.categoryId}}
    

 const GetAllsubCatedories = await SubcategoryModel.find(fillteration).skip(skip).limit(limit).populate({path:`category`,select:`name  -_id`});

    res.status(400).json({resulate:GetAllsubCatedories.length,page,data:GetAllsubCatedories})
});




// @desc   get spacific SubCategory
// @route get /api/v1/subcategory:id
// @access   public
const getsubcategorybyid = asyncHandler(async(req,res,next)=>{
    const id = req.params.id
    
    //.populate({path:`category`,select:`name  -_id`})
 const getsubcategoryById = await SubcategoryModel.findById(id)
 if(!getsubcategoryById){
     // res.status(401).json({msg:`No category for this ${id}`})
  return next( new ApiError(`No Subcategory for this ${id}`,404))
 }
 res.status(200).json({data: getsubcategoryById})
 
 })




 // @desc   update subCategory
// @route put /api/v1/category:id
// @access   private
const updatesubcategory = asyncHandler(async(req,res,next)=>{
    const id = req.params.id
    const name = req.body.name
    const category = req.body.category
    const subcategory = await SubcategoryModel.findOneAndUpdate({_id:id},{name:name,category:category,slug:slugify(name)},{new:true});

    if(!subcategory){
        // res.status(401).json({msg:`No category for this ${id}`})
        return next( new ApiError(`No category for this ${id}`,404))
    }
    res.status(200).json({data: subcategory})
})




const deltesubcategory = asyncHandler(async(req,res,next)=>{
    const id = req.params.id;
    const subcategory = await SubcategoryModel.findByIdAndDelete({_id:id})
    if(!subcategory){
        // res.status(401).json({msg:`No category for this ${id}`})
        return next( new ApiError(`No category for this ${id}`,404))
    }
    res.status(200).json({msg:`the category deleted`,data: subcategory})
    
    })

module.exports= { CreateSubCategory,getsubcategorybyid,subgetcategory,updatesubcategory,deltesubcategory}
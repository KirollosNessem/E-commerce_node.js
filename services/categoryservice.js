



const categoryModel = require("../models/category_model")
 const slugify = require("slugify")
 const asyncHandler = require('express-async-handler')

 const ApiError = require("../utils/apiError")
// @desc   get All Category
// @route get /api/v1/category
// @access   public
const getcategory =asyncHandler( async(req,res)=>{
    const page =req.query.page * 1||1;
    const limit = req.query.limit *1 ||  5;
    const skip =(page - 1)*limit;

 const GetAllCatedories = await categoryModel.find({}).skip(skip).limit(limit);

    res.status(400).json({resulate:GetAllCatedories.length,page,data:GetAllCatedories})
});
// @desc   get Create Category
// @route post /api/v1/category
// @access   private
const CreateCategory =asyncHandler( async(req, res) => {
    const name = req.body.name;

    // Creating a new category with the provided name and slugifying it
 const category=  await categoryModel.create({ name: name, slug: slugify(name) })
 res.status(201).json({ data: category }); 
       
});

// @desc   get spacific Category
// @route get /api/v1/category:id
// @access   public
const getcategorybyid = asyncHandler(async(req,res,next)=>{
   const id = req.params.id
const getcategoryById = await categoryModel.findById(id)
if(!getcategoryById){
    // res.status(401).json({msg:`No category for this ${id}`})
 return next( new ApiError(`No category for this ${id}`,404))
}
res.status(200).json({data: getcategoryById})

})

// @desc   update Category
// @route put /api/v1/category:id
// @access   private
const updatecategory = asyncHandler(async(req,res,next)=>{
    const id = req.params.id
    const name = req.body.name
    const category = await categoryModel.findOneAndUpdate({_id:id},{name:name},{new:true});

    if(!category){
        // res.status(401).json({msg:`No category for this ${id}`})
        return next( new ApiError(`No category for this ${id}`,404))
    }
    res.status(200).json({data: category})
})



const deltecategory = asyncHandler(async(req,res,next)=>{
const id = req.params.id;
const category = await categoryModel.findByIdAndDelete({_id:id})
if(!category){
    // res.status(401).json({msg:`No category for this ${id}`})
    return next( new ApiError(`No category for this ${id}`,404))
}
res.status(200).json({msg:`the category deleted`,data: category})

})


module.exports = {getcategory,CreateCategory,getcategorybyid,updatecategory,deltecategory}
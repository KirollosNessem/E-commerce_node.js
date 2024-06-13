



const BrandModel = require("../models/brand_model ")
 const slugify = require("slugify")
 const asyncHandler = require('express-async-handler')

 const ApiError = require("../utils/apiError")
// @desc   get All Brands
// @route get /api/v1/Brands
// @access   public
const getBrand =asyncHandler( async(req,res)=>{
    const page =req.query.page * 1||1;
    const limit = req.query.limit *1 ||  5;
    const skip =(page - 1)*limit;

 const GetAllCatedories = await BrandModel.find({}).skip(skip).limit(limit);

    res.status(400).json({resulate:GetAllCatedories.length,page,data:GetAllCatedories})
});
// @desc   get Create Brands
// @route post /api/v1/Brands
// @access   private
const CreateBrand =asyncHandler( async(req, res) => {
    const name = req.body.name;

    // Creating a new Brands with the provided name and slugifying it
 const Brands=  await BrandModel.create({ name: name, slug: slugify(name) })
 res.status(201).json({ data: Brands }); 
       
});

// @desc   get spacific Brands
// @route get /api/v1/Brands:id
// @access   public
const getBrandbyid = asyncHandler(async(req,res,next)=>{
   const id = req.params.id
const getBrandById = await BrandModel.findById(id)
if(!getBrandById){
    // res.status(401).json({msg:`No Brands for this ${id}`})
 return next( new ApiError(`No Brands for this ${id}`,404))
}
res.status(200).json({data: getBrandById})

})

// @desc   update Brands
// @route put /api/v1/Brands:id
// @access   private
const updateBrand = asyncHandler(async(req,res,next)=>{
    const id = req.params.id
    const name = req.body.name
    const Brands = await BrandModel.findOneAndUpdate({_id:id},{name:name},{new:true});

    if(!Brands){
        // res.status(401).json({msg:`No Brands for this ${id}`})
        return next( new ApiError(`No Brands for this ${id}`,404))
    }
    res.status(200).json({data: Brands})
})



const delteBrand = asyncHandler(async(req,res,next)=>{
const id = req.params.id;
const Brands = await BrandModel.findByIdAndDelete({_id:id})
if(!Brands){
    // res.status(401).json({msg:`No Brands for this ${id}`})
    return next( new ApiError(`No Brands for this ${id}`,404))
}
res.status(200).json({msg:`the Brands deleted`,data: Brands})

})


module.exports = {getBrand,CreateBrand,getBrandbyid,updateBrand,delteBrand}
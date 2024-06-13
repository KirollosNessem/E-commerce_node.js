



const ProductModel = require("../models/proudactmodel")
 const slugify = require("slugify")
 const asyncHandler = require('express-async-handler')

 const ApiError = require("../utils/apiError")
// @desc   get All Product
// @route get /api/v1/Product
// @access   public
const getProduct =asyncHandler( async(req,res)=>{
    const page =req.query.page * 1||1;
    const limit = req.query.limit *1 ||  5;
    const skip =(page - 1)*limit;

 const GetAllCatedories = await ProductModel.find({}).skip(skip).limit(limit);

    res.status(400).json({resulate:GetAllCatedories.length,page,data:GetAllCatedories})
});
// @desc   get Create Product
// @route post /api/v1/Product
// @access   private
const CreateProduct =asyncHandler( async(req, res) => {
    req.body.slug= slugify(req.body.title)

    // Creating a new Product with the provided name and slugifying it
 const Product=  await ProductModel.create(req.body)
 res.status(201).json({ data: Product }); 
       
});

// @desc   get spacific Product
// @route get /api/v1/Product:id
// @access   public
const getProductbyid = asyncHandler(async(req,res,next)=>{
   const id = req.params.id
const getProductById = await ProductModel.findById(id)
if(!getProductById){
    // res.status(401).json({msg:`No Product for this ${id}`})
 return next( new ApiError(`No Product for this ${id}`,404))
}
res.status(200).json({data: getProductById})

})

// @desc   update Product
// @route put /api/v1/Product:id
// @access   private
const updateProduct = asyncHandler(async(req,res,next)=>{
    const id = req.params.id
    if(req.body.title){
    req.body.slug= slugify(req.body.title)
}
    const Product = await ProductModel.findOneAndUpdate({_id:id},req.body,{new:true});

    if(!Product){
        // res.status(401).json({msg:`No Product for this ${id}`})
        return next( new ApiError(`No Product for this ${id}`,404))
    }
    res.status(200).json({data: Product})
})



const delteProduct = asyncHandler(async(req,res,next)=>{
const id = req.params.id;
const Product = await ProductModel.findByIdAndDelete({_id:id})
if(!Product){
    // res.status(401).json({msg:`No Product for this ${id}`})
    return next( new ApiError(`No Product for this ${id}`,404))
}
res.status(200).json({msg:`the Product deleted`,data: Product})

})


module.exports = {getProduct,CreateProduct,getProductbyid,updateProduct,delteProduct}
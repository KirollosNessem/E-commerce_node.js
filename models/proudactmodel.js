const mongoose = require("mongoose")
const productScehma = mongoose.Schema({
title:{
    type:String,
    require:true,
    trim:true,
    minlength:[3,`To Short Proudact Title`],
    maxlength:[100,`To proudact Proudact Title`],
  
},
slug:{
    type:String,
    require:true,
    lowercase:true,
},
description:{
    type:String,
    require:[true,`The description of the product required `],
    minlength:[20,`To Short Proudact Description`],

},
quantity:{
    type:Number,
    require:[true,`The quantity of the product required `],
},
sold:{
    type:Number,
    default:0,
},
price:{
    type:Number,
    require:[true,`The price of the product required `],
    trime:true,
    //using max in Number and using maxlength in String
    max:[20000,`To Long Proudact Price `]
},
priceAfterDiscount:{
    type:Number,
    trime:true,
    maxlength:[20,`To Long Proudact Price `]
},
colors:[String],
images:[String],
imagecover:{
    type:String,
    require:[true,`The cover image of the product required `],
},
category:{
    type:mongoose.Schema.ObjectId,
    ref:`Category`,
    require:[true,`The category of the product required `],
},
subcategory:[{
    type:mongoose.Schema.ObjectId,
    ref:`SubCategory`,
    require:[true,`The subcategory of the product required `],
}],
brand:{
    type:mongoose.Schema.ObjectId,
    ref:`Brand`,
    
},
ratingaverage:{
    type:Number,
    //using max in Number and using maxlength in String
    min:[1,`Rating Must be above or equal 1.0`],
    max:[5,`Rating Must be below or equal 5.0`],
    
},
ratingQuantity:{
    type:Number,
    default:0
}

},{timestamp:true});


module.exports = mongoose.model("Product",productScehma)
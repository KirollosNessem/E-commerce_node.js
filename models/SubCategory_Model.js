const mongoose = require("mongoose");

const SubCategoeySchema = new mongoose.Schema({
   name:{
    type:String,
    require:true,
    trim:true,
    unique:[true,"SubCategory Must Be Unique"],
    maxlength:[32,`To Long SubCategory`],
    minlength:[2,`To Short SubCategory`],
   },
   slug:{
    type:String,
    lowercase:true
   },
   category:{
    type:mongoose.Schema.ObjectId,
    ref:`Category`,
    require:[true,`SubCategory must be belong to parent category`]
   },





},{timestamps:true})

module.exports = mongoose.model("SubCategory",SubCategoeySchema);
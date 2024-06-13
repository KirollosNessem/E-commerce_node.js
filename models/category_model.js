
const mongoose =require("mongoose")


//create schema
const Categoryschema = new mongoose.Schema({

    name:{
        type:String,
        require:[true,"category required"],
        unique:[true,"category must be unique"],
        minlength:[3,'Too short category name'],
        maxlength:[32,'Too long category name']
    },
    //A and b =>  shoping.com /a-and-b
    slug:{
        type:String,
        lowercase:true
    },
    images:String
},
//لما اعوز اجيب حاجه من الداتا بيز اجبها من الاتحدث للاقدم وكدا
{timestamps:true}
)
//conver Schema
const categoryModel = mongoose.model("Category",Categoryschema)


module.exports = categoryModel
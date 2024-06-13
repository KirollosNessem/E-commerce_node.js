
const mongoose =require("mongoose")


//create schema
const Brandschema = new mongoose.Schema({

    name:{
        type:String,
        require:[true,"Brand required"],
        unique:[true,"Brand must be unique"],
        minlength:[3,'Too short Brand name'],
        maxlength:[32,'Too long Brand name']
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
const BrandModel = mongoose.model("Brand",Brandschema)


module.exports = BrandModel
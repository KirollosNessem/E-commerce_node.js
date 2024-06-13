const express =require("express")
const dotenv = require("dotenv")
dotenv.config({path:'config.env'})
const morgan = require("morgan")
const dbconection = require("./config/database")
dbconection()
const categoryRoute = require("./Routes/category_route")
const SubcategoryRoute = require("./Routes/Subcategory_route")
const BrandRoute = require("./Routes/Brand_route")
const proudactRoute = require("./Routes/proudact_route")

const ApiError = require("./utils/apiError")
const globalware = require("./middlewares/errorhadlingMiddleware")




const app = express()
//midelware
app.use(express.json())
if(process.env.NODE_ENV == "development"){
app.use(morgan("dev"))

console.log(`mode:${process.env.NODE_ENV}`)
}


//Route
app.use("/api/v1/categories",categoryRoute)
app.use("/api/v1/subcategories",SubcategoryRoute)
app.use("/api/v1/brands",BrandRoute)
app.use("/api/v1/proudacts",proudactRoute)
app.all('*',(req,res,next)=>{
    //create error and send to herror handling midleware
    // const error = new Error(`cant be find this Url:${req.originalUrl}`) 
    // next(error.message)
    next(new ApiError(`cant be find this Url:${req.originalUrl}`,400))
})
  

// global error handling 
// convert error from html into json
app.use(globalware)

app.get("/",(req,res)=>{
    res.send("Hello")
})

const port = process.env.PORT//800
app.listen(port,()=>{

    console.log(`App running in port ${port}`)
})
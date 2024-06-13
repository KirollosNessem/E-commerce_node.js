const mongoose =require("mongoose")
const dbconection=()=>{
    //conact db
mongoose.connect(process.env.DB_URL).then((conn)=>{
    console.log(`dbconection conected`)
}).catch((err)=>{
    console.error(`dbconection Error:${err}`)
    process.exit(1);
})
}
 module.exports = dbconection
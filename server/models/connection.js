const mongoose=require('mongoose')
const url="mongodb://localhost:27017/meanweekend"
mongoose.connect(url)
const db=mongoose.connection
console.log('connected to mongoDB')
module.exports=db

const express=require("express")
const connect = require("./connectDB")
// create instance
const app=express()
// midlware
app.use(express.json())  //teste le requiste de user  si  le elle passer ou nn et return le respense
// require dotnev
require('dotenv').config() 
 //connecting   to bd
 connect()
 const cors=require("cors"); 
const corsOptions ={ origin:'*', credentials:true, //access-control-allow-credentials:true
 optionSuccessStatus:200, } 
 app.use(cors(corsOptions))



//create port
const PORT=process.env.PORT || 7666
//create server
app.listen(PORT,(error)=>{
    error?
    console.log(error):
    console.log(`server in running on port ${PORT}`)
    
})
app.use(`/api/Famous`,require(`./Routes/Famous`))
app.use('/api/User',require('./Routes/userRoutes'))
app.use('/api/Piece',require('./Routes/Piece'))

app.use((req,req)=>{
    resizeBy.send("API is running...")
})


const mongoose=require("mongoose")
//create shema
const schema=mongoose.Schema 

const FamousShema=new schema(
    {
        Famousname: { 
            type:String,
            required:true 
        },
        FamousInfo: {
            type:String
        },
        FamousPhoto:{
            type:String ,
            required:true
        },
       
    });
  
module.exports =mongoose.model("FamousModel",FamousShema) 
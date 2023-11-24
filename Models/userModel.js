const mongoose=require("mongoose")
//create shema
const schema=mongoose.Schema 

const userShema=new schema(
    {
        username: { 
            type:String,
            required:true 
        },
        email:{            
             type:String,
             required:true, 
            unique:true  
        },
        password:{            
            type:String,
            required:true 
       },
       phone:{            
        type:Number,
        required:true
       },
       Gallery:{
        type:[{
            
        }]
       }
       
    });
  
module.exports =mongoose.model("user",userShema) 
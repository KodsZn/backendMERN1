const FamousModel=require("../Models/Famous")
 //add Famous
exports.addFamous=async(req,res)=>{
try {
   const{Famousname,FamousInfo,FamousPhoto}=req.body
   const newFamous= new FamousModel({Famousname,FamousInfo,FamousPhoto})
await newFamous.save()
const Famouses= await FamousModel.find()
res.status(200).send({msg:"You  added a new Famous successfuly",Famouses})

} catch (error) {
    res.status(400).send({msg:"cannot add this Famous",error})  
}
}
//get all the famous
exports.getFamous=async(req,res)=>{   
    try {
        const Famous= await FamousModel.find()
    res.status(200).send({msg:"FamousModel found successfuly",Famous})
    
    } catch (error) {
        res.status(500).send({msg:"error on getting the FamousModel",error})  
    }
    
    }

const PieceModel = require("../Models/PieceModel")

//Add the piece to the gallery
exports.addPiece=async(req,res)=>{
    try {
       const{Title,Descrption,Image}=req.body
       const newPiece= new PieceModel({Title,Descrption,Image})
    await newPiece.save()
    const Pieces= await PieceModel.find()
    res.status(200).send({msg:"the Pieces of art  has been added successfuly",Pieces})
    
    } catch (error) {
        res.status(400).send({msg:"cannot add this One",error})  // erreur client 
    }
}
exports.getPiece=async(req,res)=>{   // appel tous les Pieces
    try {
       const Piece= await PieceModel.find()
    res.status(200).send({msg:"Your Piece of art  found successfuly",Piece})
    
    } catch (error) {
        res.status(500).send({msg:"error on getting the Piece",error})  // erreur client 
    }
    
    }
exports.deletePiece=async(req,res)=>{   // appel tous les pieces
        try {
            const {_id}=req.params  //  lien de id
             await PieceModel.findByIdAndDelete({_id})
             res.status(200).send({msg:"deleted successfuly"})
    
         } catch (error) {
            res.status(500).send({msg:"error on delete Piece",error})  // erreur client 
        }
    } 
//get by id
exports.getById=async(req,res)=>{   // appel par id 
    try {
        const {_id}=req.params  //  lien de id

       const pieces= await PieceModel.findById({_id})
       if(!pieces)
       {
        res.status(500).send({msg:"error non valide "})  // erreur client 
       }
       else 
       {
        res.status(200).send({msg:"piece found successfuly",pieces})
       }
     } catch (error) {
        res.status(500).send({msg:"error on getting  piece id",error})  // erreur client 
    }
    
    }    
//edit the piece's info  
exports.getByIdAndEdit =async(req,res)=>{
    try {
        const {_id}=req.params  
        const newPiece=req.body
        const pieces=  await PieceModel.updateOne({_id},{$set:newPiece})
        res.status(200).send({msg:"piece updated successfuly",pieces})
    
    } catch (error) {
        res.status(500).send({msg:"cannot edit piece",error})   
    }
    }  
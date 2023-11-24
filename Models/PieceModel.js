const mongoose= require("mongoose")
//create the piece of art to put in the gallery

const schema=mongoose.Schema
const PieceSchema=new schema(
{
    Title:{type:String , required:true},
    Descrption: {type:String},
    Image:{type:String , required:true},
}) 
module.exports =mongoose.model("pieceModel",PieceSchema)
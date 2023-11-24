const express=require("express")
const { addPiece, getPiece, deletePiece, getByIdAndEdit, getById } = require("../Controllers/PieceController")
const router = express.Router()

//Add the piece of art to the gallery 
router.post('/add_Piece',addPiece)
//Delete the piece of art to the gallery 
router.delete('/delete_Piece/:_id',deletePiece)
//Get the piece of art  
router.get('/get_Piece',getPiece)
//get by id
router.get('/get_byId/:_id',getById)   // _id de url de page

//edit the piece
router.put('/edit_Piece/:_id',getByIdAndEdit)


module.exports=router
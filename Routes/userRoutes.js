const express=require("express")
const auth = require('../Middelwar/auth');
const { registerValidation, Validator } = require("../Middelwar/validator");
const { register, login, deleteUser } = require("../Controllers/userConrroller");


// require router
const router = express.Router()

 router.post('/register',registerValidation(),Validator,register)
// login
router.post('/login',login)
router.delete('/deleteUser/:_id',deleteUser)

router.get('/current',auth,(req,res)=>{res.send(req.user)})


module.exports=router
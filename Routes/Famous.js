const express=require("express")
const { addFamous, getFamous } = require("../Controllers/FamousController")
const router =express.Router()
//Add a Famous Artist informations
router.post('/add_Famous',addFamous)
router.get('/get_all_Famous',getFamous)
module.exports=router
const user=require("../Models/userModel")
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken');
const stringify =require('flatted');
const userModel = require("../Models/userModel");
 
exports.register=async(req,res)=>{
try {
   const{username,email,password,phone}=req.body
   const findUser=await user.findOne({username})
   if (!findUser){
    const newUser= new user(req.body)
    const salt=10 
    const hashedPassword=await bcrypt.hash(password,salt)
    newUser.password=hashedPassword
    await newUser.save()
    const token =jwt.sign({id:newUser._id},process.env.SECRET_KEY)
    res.status(200).send(JSON.stringify ({msg:"registerd successfuly",newUser,token}))
     }
    else {
        res.status(400).send({msg:"user already exist"})
     }}
 catch (error) {
    res.status(500).send({msg:"error on register",error})  
}}


exports.login=async(req,res)=>{   // appel tous les products
    try {
        const{username,password}=req.body
        const findUser=await user.findOne({username})
        const checkPassword=await bcrypt.compare(password,findUser.password)

        if (!findUser){
          res.status(400).send("username not found")
        } 
        else if (!checkPassword)
        {
            res.status(400).send("pasword not found")

        }else{
            const token =jwt.sign({id:findUser._id},process.env.SECRET_KEY)
            res.status(200).send({msg:"Welcome Back ! ",findUser,token})
           

        }
    } catch (error) {
        res.status(500).send({msg:"error on getting all login",error})  // erreur client 
    }
    
    }

    exports.deleteUser=async(req,res)=>{   // appel tous les products
        try {
            const {_id}=req.params  //  lien de id
             await user.findByIdAndDelete({_id})
             res.status(200).send({msg:"deleted successfuly"})

         } catch (error) {
            res.status(500).send({msg:"error on deleteuser",error})  // erreur client 
        }
        
        }

//Add your art Peices



//hethmm ll galeray tnjm ta3ml update ll peice
        exports.getByIdAndEdit =async(req,res)=>{
    try {
        const {_id}=req.params  //  lien de id
        const newProduct=req.body

        const products=  await product.updateOne({_id},{$set:newProduct})
        res.status(200).send({msg:"product updated successfuly",newProduct})
        } catch (error) {
        res.status(500).send({msg:"cannot add product",error})  // erreur client 
    }}


                    
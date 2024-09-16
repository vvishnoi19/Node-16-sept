const express=require('express');
const usercontroller=require("../controllers/usercontroller")
const router=express.Router();
router.get('/users',(req,res)=>{
    usercontroller.getUser(req,res);
})
module.exports=router;

 const express = require('express');
 const router = express.Router();

 router.get('/',(req,res)=>{
    obj = {
        name:"rishabh",
        msg:"Hello"
    }
    res.json(obj)
 })

 module.exports = router
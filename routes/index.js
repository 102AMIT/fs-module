const express=require('express');
const router=express.Router();
const fs=require('fs')

router.get('/',(req,res)=>{
   return res.render(`home`)
})

router.post('/create',(req,res)=>{
    let data=req.body;
    // this converts the value of an java Script object
    data=JSON.stringify(data);
    const jsonObject = fs.writeFileSync("./newEntry/newEntry.json", data);
});

module.exports=router ;
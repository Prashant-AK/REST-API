const express=require('express');
const router=express.Router();
const members=require('../Member/member')
const path=require('path');
const uuid=require('uuid');

router.get('/:id',(req,res)=>{
    const found=member.some(members=>members.id===parseInt(req.params.id));
    if(found){
        res.json(member.filter(members=>members.id ===parseInt(req.params.id)));
          }
    else {  res.status(400).json('No member found'); }
 });
 //Handle the get Routes
 router.get('/',(req,res)=>{res.redirect('/');})

 //make new member
 router.post('/',(req,res)=>{
     const newmember={
         id:uuid.v4(),
         name:req.body.name,
         email:req.body.email,
         status:'active'
     }
     members.push(newmember);
     res.redirect('/prashant');//this for the html page
    // res.json(members);//this is for the postman 
    // console.log(members);
    //  console.log('post is working')
 });
 
 //make update member

 router.put('/:id',(req,res)=>{
     const found=members.some(members=>members.id ===parseInt(req.params.id));
     if(found){
         member.forEach(members=>{
             if(members.id === parseInt(req.params.id)){
                 members.name=req.body.prashant;
                 members.email=req.body.email;
                 res.json({msg:'Member Updated Successfully'})
             }
         })
     }
     else{
         res.status(400).json({msg:`No member found with this id ${req.params.id}`});
    }
 });




 module.exports= router;
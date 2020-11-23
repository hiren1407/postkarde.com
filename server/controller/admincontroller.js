const express=require('express')
const adminmodel=require('../models/adminmodel')
const usermodel=require('../models/usermodel')
const router=express.Router()
const path = require('path');
const multipart=require('connect-multiparty')
const multimiddle=multipart({uploadDir:'../myngapp/src/assets/uploads'})

clist=''
router.use('/managesubcat',function(req,res,next){
	usermodel.fetchcatlimit('homecat',function(result){
		clist=result
		next()	
	})
})

router.get('/manageuser',function(req,res,next){

    adminmodel.manageuser(function(result){
        res.json({'result':result})
    })
})

router.post('/manageuseraction',function(req,res,next){
    adminmodel.manageuseraction(req.body,function(result){
        res.json({'result':'done'})
    })
})

router.post('/managecat',multimiddle, function(req, res, next) {
    console.log(req.body)
    cnm=req.body.cnm
    cicon_nm=req.files.cicon.path.slice(30)
    
    
    
    adminmodel.managecat(cnm,cicon_nm,function(err,result){
        if(err)
            console.log(err)
        else
            res.json({'result':'Category Added Successfully'})
    })	 
  });



  router.get('/managesubcat', function(req, res, next) {
    res.json({'result':clist})
  });

  router.post('/managesubcat',multimiddle, function(req, res, next) {
      
    
    cnm=req.body.cnm
    subcnm=req.body.subcnm
    subcicon_nm=req.files.subcicon.path.slice(30)
    
    
    
    adminmodel.managesubcat(subcnm,cnm,subcicon_nm,function(err,result){
        if(err)
            console.log(err)
        else
            res.json({'result':'SubCategory Added Successfully'})
    })	 
  });

module.exports=router
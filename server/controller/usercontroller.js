const express=require('express')
const usermodel=require('../models/usermodel')
const appmailer = require('./appmailer');
const changep = require('./changep');
const router=express.Router()
const jwt = require('jsonwebtoken');
const multipart=require('connect-multiparty');
const multimiddle=multipart({uploadDir:'../myngapp/src/assets/uploads'})
router.get('/',(req,res)=>{
	res.send("express server invoked")
})
router.post('/register',(req,res)=>{
    usermodel.register(req.body,function(result){
        if(result){
        appmailer.mymailer(req.body,function(){
            res.json({'r':'Registration successful please verify from mail'})
        })	
    }
    else{
    
        console.log(err)
        res.json({'r':'error'})
    }
    })
})

router.get('/verifyaccount', function(req, res, next) {
    usermodel.verifyaccount(req.query,function(err,result){
        if(err)
            console.log(err)
        else
            res.redirect('/login')	
    })
  });

router.post('/login', function(req, res, next) {
    
    
    
          
          usermodel.login(req.body,function(result){
            if(result.length>0)
            {
                let payload= {subject:result[0]._id}
                let token = jwt.sign(payload,'dffhcxxcvcxvwerrewxvv');
                res.json({token: token,user:result[0]});
            }
            else
            res.json({token: 'error'});
          })
      
      
          
     
  });


router.post('/forgetpass',function(req,res,next){
    usermodel.forgetpass(req.body,function(err,result){
        if(err)
        console.log(err)
        else
        {
            
            changep.mymailer(result,function(){
                res.json({'result':'Password Send to mail'});
            })
        }
    })
})


  router.post('/changepass',function(req,res,next){
      usermodel.changepass(req.body,function(err,result){
          if(err)
          res.json({'r':'Error In Changing'})
          else
          res.json({'r':'Password Changed Successfully'})
      })
  })

  router.post('/fetchsubcat', function(req, res, next) {
    var data=req.body
    console.log(data)
    usermodel.fetchsubcat('homesubcat',data,function(result){
        res.json({'result':result})
    })
  });


  router.get('/fetchsubcatall',function(req,res,next){

    usermodel.fetchsubcatall('homesubcat',function(result){
        res.json({'result':result})
    })
  })

  router.post('/addpost',multimiddle, function(req, res, next) {
    console.log(req.body)
    data=req.body
    
    
    
    
    adsicon_nm=req.files.adsicon.path.slice(30)
    
    
    
    usermodel.addpost(adsicon_nm,data,function(err,result){
        if(err){           
             console.log(err)
             console.log('hi')
            }

        else{
            console.log('bye')
            res.json({'result':'Ad Added Successfully'})
        }
    })	 
  });

  router.post('/showads', function(req, res, next) {
    data=req.body
    usermodel.showads('homeads',data,function(result){
        var paypalURL = 'https://www.sandbox.paypal.com/cgi-bin/webscr'; 
        var paypalID='hirenkhanchandaniseller@gmail.com'
        res.json({'result':result,'subcnm':data.subcnm,'paypalURL':paypalURL,'paypalID':paypalID});
    })
  });


  router.post('/getuserdata',function(req,res,next){
      data=req.body
      usermodel.getuserdata(data,function(result){
          if(result.length>0){
              res.json({'result':result})
          }
      })
    }
  );

  router.post('/updateuserdata',function(req,res,next){
      console.log(req.body)
      usermodel.editdata(req.body,function(result){
          if(result)
          res.json({'result':'details updated successfully'})
      })
  })
    
  router.post('/managepost', function(req, res, next) {
    data=req.body
    usermodel.managepost('homeads',data,function(result){
        
        res.json({'result':result});
    })
  });

  router.post('/updatead',function(req,res,next){
    console.log(req.body)
    usermodel.editaddata(req.body,function(result){
        if(result)
        res.json({'result':'ad updated successfully'})
    })

    
})
router.post('/deletead',function(req,res,next){
    console.log(req.body)
    usermodel.deletead(req.body,function(result){
        if(result)
        res.json({'result':'ad deleted successfully'})
    })

    
})
  

module.exports=router
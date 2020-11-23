const db=require("./connection")
function usermodel()
{
    
    this.register=function(UserData,cb){
      db.collection('homeregister').find().toArray(function(err,result){
      //db.collection('register').find().sort({'regid':-1}).limit(1).toArray(function(err,result){
      //console.log(result)
      let regid=result[result.length-1].regid+1
      UserData.regid=regid	
    
      console.log(regid)
        db.collection('homeregister').insertOne(UserData,function(err,result){
          if(err)
            console.log(err)
          else
            cb(result)	
        })	   
     
        
      })
    
    }

    this.verifyaccount=function(data,cb)
    {
      
         db.collection('homeregister').updateOne({'email':data.email},{$set:{'status':1}},function(err,result){
           
           cb(err,result)
         })
    }

    
  this.login=function(userData,cb)	
  {
 
    db.collection('homeregister').find({$and:[{'email':userData.email},{'pass':userData.pass},{'status':1}]}).toArray(function(err,result){
     if(err)
        console.log(err)
        else
        {
          
            cb(result)
       }   })
    
        
            
    
  }


  this.forgetpass=function(data,cb)
 {
   db.collection('homeregister').find({'email':data.email}).toArray(function(err,result){
     cb(err,result)
   })
 }

  this.changepass=function(data,cb)
  {
    console.log(data)
    db.collection('homeregister').updateOne({'email':data.email},{$set:{'pass':data.pass}},function(err,result){
      cb(err,result)
    })
  }


  this.fetchcatlimit=function(coll_nm,cb)	
  {
   
     db.collection(coll_nm).find().toArray(function(err,result){
     //console.log(result)
    if(err)
    console.log(err)
    else
     cb(result)	
 })	}    	
 
 
 this.fetchsubcat=function(coll_nm,data,cb)	
 {
  db.collection(coll_nm).find({'cnm':data.cnm}).toArray(function(err,result){
    //console.log(result)
   if(err)
   console.log(err)
   else
    cb(result)	
})	    		

 }
     
 this.fetchsubcatall=function(coll_nm,cb)	
 {
  db.collection(coll_nm).find().toArray(function(err,result){
    //console.log(result)
   if(err)
   console.log(err)
   else
    cb(result)	
})	    		

   
 }


 this.addpost=function(adsicon,adsData,cb)
  {
    db.collection('homeads').find().toArray(function(err,result){
      //db.collection('register').find().sort({'regid':-1}).limit(1).toArray(function(err,result){
      //console.log(result)
      let regid=result[result.length-1].regid+1
      adsData.regid=regid
      adsData.adsicon=adsicon
      
        db.collection('homeads').insertOne(adsData,function(err,result){
          if(err)
            console.log(err)
          else
            cb(err,result)	
        })	    		
      
      

    
      })

    
  }


  this.showads=function(coll_nm,data,cb)	
 {
   
   
   if(data.minp!=undefined)
   {
     db.collection(coll_nm).find({$and:[{'subcnm':data.subcnm},{'price':{$gte:data.minp}},{'price':{$lte:data.maxp}}]}).toArray(function(err,result){
       if(err)
       console.log(err)
       else
       cb(result)
     })
    
   }
   else if(data.city!=undefined)
   {
    db.collection(coll_nm).find({$and:[{'subcnm':data.subcnm},{'city':data.city}]}).toArray(function(err,result){
      if(err)
      console.log(err)
      else
      cb(result)
    })

     
   }
   else
   {
    db.collection(coll_nm).find({$and:[{'subcnm':data.subcnm}]}).toArray(function(err,result){
      if(err)
      console.log(err)
      else
      cb(result)
    })

     
   }
   
   
 }
 
 this.getuserdata=function(userData,cb)	
 {

   db.collection('homeregister').find({'email':userData.email}).toArray(function(err,result){
    if(err)
       console.log(err)
       else
       {
         
           cb(result)
      }   })
   
       
           
   
 }

 this.editdata=function(data,cb)
 {
  db.collection('homeregister').updateOne({'regid':data.id},{$set:{'nm':data.nm,'email':data.email,'address':data.address,'city':data.city}},function(err,result){
    if(err)
    console.log(err)
    else{
      console.log(result)
    cb(result)
    }
  })
 }

 this.managepost=function(coll_nm,data,cb)	
 {
   
   
   
   
    db.collection(coll_nm).find({$and:[{'email':data.email}]}).toArray(function(err,result){
      if(err)
      console.log(err)
      else
      cb(result)
    })

     
   
   
   
 }
    

 this.editaddata=function(data,cb)
 {
  db.collection('homeads').updateOne({'regid':data.id},{$set:{'title':data.title,'mobile':data.mobile,'description':data.description,'city':data.city,'price':data.price}},function(err,result){
    if(err)
    console.log(err)
    else{
      console.log(result)
    cb(result)
    }
  })
 }

 this.deletead=function(data,cb){
  
      db.collection('homeads').deleteOne({'regid':data.regid},function(err,result){
          if(err)
          console.log(err)
          else
          cb(result)
      })
  
}

this.addchats=function(data,cb){
  db.collection('homechats').insertOne(data,function(err,result){
    cb(err,result)
  })
}

}

module.exports=new usermodel()
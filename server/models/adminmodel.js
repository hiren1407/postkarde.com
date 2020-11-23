const db=require("./connection")
function adminmodel()
{
    this.manageuser=function(cb){
        db.collection('homeregister').find({'role':'user'}).toArray(function(err,result)
        {
            if(err)
            console.log(err)
            else
            cb(result)
        }
        )}
    this.manageuseraction=function(data,cb){
        if(data.value=="delete"){
            db.collection('homeregister').deleteOne({'email':data.email},function(err,result){
                if(err)
                console.log(err)
                else
                cb(result)
            })
        }
        else if(data.value=="block"){
            db.collection('homeregister').updateOne({'email':data.email},{$set:{'status':0}},function(err,result){
                if(err)
                console.log(err)
                else
                cb(result)
            })
        }
        else if(data.value=="unblock"){
            db.collection('homeregister').updateOne({'email':data.email},{$set:{'status':1}},function(err,result){
                if(err)
                console.log(err)
                else
                cb(result)
            })
        }

    }


    this.managecat=function(cnm,cicon_nm,cb)
  {
    db.collection('homecat').find().toArray(function(err,result){
      //db.collection('register').find().sort({'regid':-1}).limit(1).toArray(function(err,result){
      //console.log(result)
      if(result.length!=0){
       catid=result[result.length-1].catid+1
      
      }
      else
      {
       catid=1
      }
    db.collection('homecat').insertOne({'catid':catid,'cnm':cnm,'cicon':cicon_nm},function(err,result){
      cb(err,result)	
  })	    		
      })
    
  }


  this.managesubcat=function(subcnm,cnm,subcicon_nm,cb)
  {
    db.collection('homesubcat').find().toArray(function(err,result){
      //db.collection('register').find().sort({'regid':-1}).limit(1).toArray(function(err,result){
      //console.log(result)
      if(result.length!=0){
       subcatid=result[result.length-1].subcatid+1
      
      }
      else
      {
       subcatid=1
      }
    db.collection('homesubcat').insertOne({'subcatid':subcatid,'subcnm':subcnm,'cnm':cnm,'subcicon':subcicon_nm},function(err,result){
      cb(err,result)	
  })	    		
      })
    
  }

}
module.exports=new adminmodel()
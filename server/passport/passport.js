var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/connection')
var session = require('express-session')
const jwt = require('jsonwebtoken');

module.exports=function(app,passport){
    
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(session({ secret: 'keyboard cat' ,resave:false,saveUninitialized:true,cookie:{secure:false}}));

  passport.serializeUser(function(user, done) {
    let payload= {subject:user}
    token = jwt.sign(payload,'dffhcxxcvcxvwerrewxvv');
    
    
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    
      done(null, id);
    
  });

    passport.use(new FacebookStrategy({
        clientID: '534567077103397',
        clientSecret: 'a09a03566a01454b1b65b2566f783e49',
        callbackURL: "http://localhost:3000/auth/facebook/callback",
        profileFields:['id','displayName','photos','email']
      },
      function(accessToken, refreshToken, profile, done) {
          // console.log(profile)
          // console.log(profile._json.email)
          email=profile._json.email
          User.collection('homeregister').find({'email':profile._json.email}).toArray(function(err,result){
            if(err)
               console.log(err)
               else
               {
                 if(result.length==0)
                 {
                    console.log('register first')
                    User.collection('homeregister').find().toArray(function(err,result){
                        //db.collection('register').find().sort({'regid':-1}).limit(1).toArray(function(err,result){
                        //console.log(result)
                        let regid=result[result.length-1].regid+1
                        	
                      
                        console.log(regid)
                          User.collection('homeregister').insertOne({'regid':regid,'nm':profile._json.name,'email':profile._json.email,'role':'user'},function(err,result){
                            if(err)
                              console.log(err)
                            else
                              console.log('added')
                          })	   
                       
                          
                        })
                 }
                 else{
                    console.log('exist')
                    

                 }
                   
              }  
            
            })
        //User.findOrCreate(..., function(err, user) {
          //if (err) { return done(err); }
          //done(null, user);
        //});
        done(null, profile)
      }
    ));



    app.get('/auth/facebook/callback',passport.authenticate('facebook', { failureRedirect: '/login' }),function(req,res){
                
        res.redirect('/social/'+token+'/'+email)
    });
    app.get('/auth/facebook',passport.authenticate('facebook', { scope: 'email' })
    );



    passport.use(new GoogleStrategy({
      clientID: '364250866532-9181fd4m3k2it7mudna9tofn15eg4oe5.apps.googleusercontent.com',
      clientSecret: '90CNLrOrK-4vCuJarJQfNCHx',
      callbackURL: "http://localhost:3000/auth/google/callback"
      
    },
    function(accessToken, refreshToken, profile, done) {
        console.log(profile._json)
        // console.log(profile.emails[0].value);
        email=profile.emails[0].value;
        User.collection('homeregister').find({'email':profile.emails[0].value}).toArray(function(err,result){
          if(err)
             console.log(err)
             else
             {
               if(result.length==0)
               {
                  console.log('register first')
                  User.collection('homeregister').find().toArray(function(err,result){
                      //db.collection('register').find().sort({'regid':-1}).limit(1).toArray(function(err,result){
                      //console.log(result)
                      let regid=result[result.length-1].regid+1
                        
                    
                      console.log(regid)
                        User.collection('homeregister').insertOne({'regid':regid,'nm':profile._json.name,'email':profile.emails[0].value,'role':'user'},function(err,result){
                          if(err)
                            console.log(err)
                          else
                            console.log('added')
                        })	   
                     
                        
                      })
               }
               else{
                  console.log('exist')
                  

               }
                 
            }  
          
          })
         
           return done(null,profile);
         
    }
  ));


  app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login','https://www.googleapis.com/auth/userinfo.email'
] }));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/social/'+token+'/'+email)
  });
return passport
}
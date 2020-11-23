const express = require('express');
const body = require('body-parser');
const url = require('url');
var socket =require('socket.io');
const path = require('path');
const http = require('http');
const cors=require('cors')
const passport=require('passport')


const app = express();
const social=require('./server/passport/passport')(app,passport)
app.use(cors())
const usercontroller = require('./server/controller/usercontroller');
const admincontroller=require('./server/controller/admincontroller')
const usermodel=require('./server/models/usermodel')

app.use(body.json());
app.use(body.urlencoded({ extended:false }));
app.use(express.static(path.join(__dirname, 'dist/myngapp')));

app.use(usercontroller);
app.use('/webapi',usercontroller);
app.use('/webapi/admin',admincontroller);
app.set('port',3000);
const port = 3000;

server = http.createServer(app);

server.listen(port,function(){
  console.log('server listen');
})
var io=socket.listen(server);
io.on('connection',function(socket){
  //console.log(socket.id)
  //console.log('hi')
  socket.on('message',function(data){
    console.log(data)
    usermodel.addchats(data,function(err,result){
      if(err)
      console.log(err)
      else
      {
        console.log("chat added")
        //io.sockets.emit('new message',{user:data.user,message:data.message,to:data.to})

      }
    })

    
    
  })
 
})
app.get('/*',function(req,res){
  res.sendFile(path.join(__dirname+'/dist/myngapp/index.html'))
})


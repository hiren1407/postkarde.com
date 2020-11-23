var socket =io.connect("http://localhost:3000/webapi")
var message=document.getElementById("message")
var handle=document.getElementById("handle")

var output=document.getElementById("output")
window.onload=function(){
var btn=document.getElementById("handle")
btn.addEventListener("click",function(){
    socket.emit("chat",{message:message.value,handle:handle.value})
})
}

socket.on("chat",function(data){
    
    output.innerHTML+='<p><strong>'+data.handle+':</strong>' + data.message +'</p>';
})


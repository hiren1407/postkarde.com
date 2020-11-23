import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private _registerApi = 'http://localhost:3000/webapi/register';
  private _loginApi = 'http://localhost:3000/webapi/login';
  private socket=io('http://localhost:3000');
  

  constructor( private http:HttpClient, private router:Router ) { }
  showDate()
  {
    let mydate=new Date()
    return mydate
  }

  public registeruser(d){
    return this.http.post<any>(this._registerApi,d)
  }
  public loginuser(d){
    return this.http.post<any>(this._loginApi,d)
  }

  public getToken():boolean{
    return !!localStorage.getItem('token');
  }

  public checkRole():boolean{
    if(localStorage.getItem('role')=='user')
    return true;
    else if(localStorage.getItem('role')=='admin')
    return false;
      
  }
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    
    localStorage.removeItem('gender');
    
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

  public sclist='';
  public subclist(d)
  {
    this.sclist=d.result

  }

  public adlist='';
  public paypalURL='';
  public paypalID='';
  public subcnm=''
  public regid
  public getData(data)
  {
    this.adlist=data.result
    this.paypalURL=data.paypalURL
    this.paypalID=data.paypalID
    this.subcnm=data.subcnm
  }

  sendMessage(data)
  {
    
    this.socket.emit('message',data)
  }

  newMessageReceived()
  {
    let observable=new Observable<{user:String,message:String}>(observer=>{
      this.socket.on('new message',(data)=>{
        console.log(data)
        observer.next(data)
      })
      return ()=>{this.socket.disconnect()}
    })
    return observable
  }
}

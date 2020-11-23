import { Component, OnInit, Output } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  o='';
  

  constructor(private router:Router, private myservice:MyserviceService,private http:HttpClient) { }

  ngOnInit() {
  }
  public fp(data)
  {
    this.http.post('http://localhost:3000/webapi/forgetpass',{'email':data}).subscribe((data)=>this.showdata(data))
  }

  public showdata(data)
  {
    this.o=data.result
  }
  onClickSubmit(d)
  {
  
    this.myservice.loginuser(d).subscribe((data)=>{

      if(data.token!='error'){
        localStorage.setItem('token',data.token);

        let currentUser ={name: data}
        localStorage.setItem('name',data.user.nm);
        localStorage.setItem('email',data.user.email);
        localStorage.setItem('role',data.user.role);
        
        localStorage.setItem('gender',data.user.gender);
        
        localStorage.setItem('id',data.user._id);
        if(localStorage.getItem('role')=='user')
        {
        this.router.navigate(['/users']); 
        }
        else if(localStorage.getItem('role')=='admin'){
          console.log(localStorage.getItem('role'))
          
        this.router.navigate(['/admin']); 
        }

      }
      else{
        this.o="Invalid User"
      }
    })

  }
  showResult(data)
  {
    this.o=data.r;
    
  }

 

}

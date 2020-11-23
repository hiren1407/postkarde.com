import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  user='';
  constructor(private myservice:MyserviceService,private router:Router) { }

  ngOnInit() {
  
  }
  
public checkToken():boolean{
    return this.myservice.getToken();
  }
  public checkRoleUser():boolean{
    this.user=localStorage.getItem('email');
    return this.myservice.checkRole()
  }

   public logout(){
    this.myservice.logout();
  }
}

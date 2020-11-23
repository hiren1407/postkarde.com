import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  constructor(private myservice:MyserviceService,private router:Router) { }

  ngOnInit() {
    if(!this.myservice.getToken() || !this.myservice.checkRole()){
    this.router.navigate(['/login']);
    this.myservice.logout();

  }

  }

  
}

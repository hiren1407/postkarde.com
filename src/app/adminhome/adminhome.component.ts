import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private myservice:MyserviceService,private router:Router) { }

  ngOnInit() {

    if(!this.myservice.getToken() || this.myservice.checkRole()){
    this.router.navigate(['/login']);
    this.myservice.logout();

  }

  }

}

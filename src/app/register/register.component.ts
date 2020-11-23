import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  o='';
  cityHasError = true;
  constructor(private router:Router,private myservice:MyserviceService) { }

  ngOnInit() {
  }
  validateCity(value) {
    if (value === 'default') {
      this.cityHasError = true;
    } else {
      this.cityHasError = false;
    }
  }
  onClickSubmit(d)
  {
    d.status=0;
    d.role="user";
    this.myservice.registeruser(d).subscribe((data)=>this.showData(data))

  }
  showData(data)
  {
    this.o=data.r;
  }

}

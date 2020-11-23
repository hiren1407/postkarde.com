import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

  token=''
  email=''
  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.token = params.get("token")
      this.email=params.get("email")
      localStorage.setItem('token',this.token);
      localStorage.setItem('role','user');
      localStorage.setItem('email',this.email)
      this.router.navigate(['/users']); 

    })
  }

}

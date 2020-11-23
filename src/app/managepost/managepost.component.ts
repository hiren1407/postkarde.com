import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-managepost',
  templateUrl: './managepost.component.html',
  styleUrls: ['./managepost.component.css']
})
export class ManagepostComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient,private myservice:MyserviceService) { }
  public adlist=''
  public email=localStorage.getItem('email')
  public data={'email':this.email}
  ngOnInit() {
    this.http.post('http://localhost:3000/webapi/managepost',this.data).subscribe((d)=>this.getdata(d))
    
  }
  public getdata(d)
  {
    this.adlist=d.result
    this.myservice.getData(d)
  }

  public movetodetails(id)
  {
    this.myservice.regid=id
    this.router.navigateByUrl('/users/useraddetails')
  }
}

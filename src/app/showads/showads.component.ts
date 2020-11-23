import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-showads',
  templateUrl: './showads.component.html',
  styleUrls: ['./showads.component.css']
})
export class ShowadsComponent implements OnInit {

  constructor(private myservice:MyserviceService,private http:HttpClient,private router:Router) { }
  public adlist=this.myservice.adlist
  public subcnm=this.myservice.subcnm
  public paypalURL=this.myservice.paypalURL
  public paypalID=this.myservice.paypalID
  public length=this.adlist.length
  ngOnInit() {

  }
  public movetodetails(id)
  {
    this.myservice.regid=id
    this.router.navigateByUrl('/addetails')
  }
 
}

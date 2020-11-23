import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addetails',
  templateUrl: './addetails.component.html',
  styleUrls: ['./addetails.component.css']
})
export class AddetailsComponent implements OnInit {
  
  constructor(private myservice:MyserviceService,private router:Router) {
    
   }
  public adlist=this.myservice.adlist
  public subcnm=this.myservice.subcnm
  public paypalURL=this.myservice.paypalURL
  public paypalID=this.myservice.paypalID
  public length=this.adlist.length
  public regid=this.myservice.regid
  
  ngOnInit() {
    console.log(this.regid)
  }

  sendMessage(data)
  {
    data.user=localStorage.getItem('email')
    if(data.user==null)
    {
      this.router.navigate(['/login']);
    }
    else{
    
    this.myservice.sendMessage({user:data.user,message:data.message,to:data.email})
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   public clist='';
  public sclist='';
  constructor(private http:HttpClient,private router:Router,private myservice:MyserviceService) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/webapi/admin/managesubcat').subscribe((d)=>this.getlist(d))
  }
  getlist(d)
  {
    this.clist=d.result
    
  }

  passdata(cnm)
  {
    
    this.http.post('http://localhost:3000/webapi/fetchsubcat',cnm).subscribe((d)=>this.passlist(d))
  }

   public passlist(d)
  {
    this.sclist=d.result
    
    this.myservice.subclist(d)
    this.router.navigateByUrl('/showsubcat')
  }
}

import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-showsubcat',
  templateUrl: './showsubcat.component.html',
  styleUrls: ['./showsubcat.component.css']
})
export class ShowsubcatComponent implements OnInit {
  public clist='';
  constructor(private myservice:MyserviceService,private http:HttpClient,private router:Router) { }
  public sclist=this.myservice.sclist
 
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
    
  }
  
  public getads(subcnm)
  {
    console.log(subcnm)
    this.http.post('http://localhost:3000/webapi/showads',subcnm).subscribe((d)=>this.getdata(d))
  }
  public getdata(data)
  {
    this.myservice.getData(data)
    console.log(data)
    this.router.navigateByUrl('/showads')

  }
}

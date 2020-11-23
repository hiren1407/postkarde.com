import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css']
})
export class ManageuserComponent implements OnInit {
  data;
  constructor(private myservice:MyserviceService,private http:HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/webapi/admin/manageuser').subscribe((data)=>this.showdata(data))
  }

  showdata(data)
  {
    this.data=data.result
    console.log(data);
    
  }
  public check(d){
    if(d.status==1)
    return true
    else 
    return false


   

  }
  public action(data){
    this.http.post('http://localhost:3000/webapi/admin/manageuseraction',data).subscribe((d)=>this.ngOnInit())
  }
}

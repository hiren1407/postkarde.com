import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-useraddetails',
  templateUrl: './useraddetails.component.html',
  styleUrls: ['./useraddetails.component.css']
})
export class UseraddetailsComponent implements OnInit {

  constructor(private myservice:MyserviceService,private http:HttpClient) { }
  public adlist=this.myservice.adlist
  public cityHasError = false;
  public regid=this.myservice.regid
  public o=''
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
    this.http.post('http://localhost:3000/webapi/updatead',d).subscribe((data)=>this.getstatus(data))
  }

  public getstatus(data)
  {
    this.o=data.result
    
  }

  public deletead(id)
  {
    this.http.post('http://localhost:3000/webapi/deletead',id).subscribe((data)=>this.getstatus(data))
  }

}

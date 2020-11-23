import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manageprofile',
  templateUrl: './manageprofile.component.html',
  styleUrls: ['./manageprofile.component.css']
})
export class ManageprofileComponent implements OnInit {
  public userdetails='';
  cityHasError = false;
  constructor(private http:HttpClient) { }
  public email=localStorage.getItem('email')
  public id=''
  public o=""
  ngOnInit() {
    this.http.post('http://localhost:3000/webapi/getuserdata',{'email':this.email}).subscribe((data)=>this.showresult(data))
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
    this.http.post('http://localhost:3000/webapi/updateuserdata',d).subscribe((data)=>this.getstatus(data))
  }

  public getstatus(data)
  {
    this.o=data.result
  }

public showresult(data)
{
this.userdetails=data.result

}
}

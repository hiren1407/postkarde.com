import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  o='';
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  onClickSubmit(d)
  {
    d.email=localStorage.getItem('email')
    console.log(d)
    this.http.post('http://localhost:3000/webapi/changepass',d).subscribe((data)=>this.showResult(data))
  }

  showResult(data){
    this.o=data.r;
  }
}

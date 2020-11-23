import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  o='';
  email='';
  sclist='';
  selectedFile:File = null;
  constructor(private http:HttpClient,private myservice:MyserviceService,private router:Router) { }

  onFileSelected(event)
  {
    this.selectedFile=<File>event.target.files[0];
  }

  onClickSubmit(d)
  {
    
    d.status="0";
    this.email=localStorage.getItem('email')
    d.email=this.email
    
    const formData = new FormData();
    formData.append('adsicon', this.selectedFile,this.selectedFile.name);
    for(var key in d)
    {
      formData.append(key,d[key])
    }
    
    console.log(d)
    this.http.post('http://localhost:3000/webapi/addpost',formData).subscribe((data)=>this.showdata(data))
 
  }
  

  ngOnInit() {
    if(this.myservice.getToken()==false)
    {
      this.router.navigate(['/login'])

    }
    this.http.get('http://localhost:3000/webapi/fetchsubcatall').subscribe((d)=>this.getlist(d))
  }

  getlist(d)
  {
    this.sclist=d.result
    console.log(this.sclist)
    
  }

  showdata(data)
  {
    this.o=data.result
  }
}

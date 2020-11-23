import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-managesubcat',
  templateUrl: './managesubcat.component.html',
  styleUrls: ['./managesubcat.component.css']
})
export class ManagesubcatComponent implements OnInit {
  clist='';
  o=''
  selectedFile:File = null;
  
  
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/webapi/admin/managesubcat').subscribe((d)=>this.getlist(d))
  }

  onFileSelected(event)
  {
    
    this.selectedFile=<File>event.target.files[0];
  }
  onClickSubmit(d)
  {
    const formData = new FormData();
    formData.append('subcicon', this.selectedFile,this.selectedFile.name);
    formData.append('cnm',d.cnm)
    formData.append('subcnm',d.subcnm)
   
    console.log(d)
    this.http.post('http://localhost:3000/webapi/admin/managesubcat',formData).subscribe((data)=>this.showdata(data))
 
  }
  

  public getlist(d)
  {
    
    this.clist=d.result
  }

  showdata(data)
  {
    this.o=data.result
  }
}

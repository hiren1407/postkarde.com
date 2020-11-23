import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-managecat',
  templateUrl: './managecat.component.html',
  styleUrls: ['./managecat.component.css']
})
export class ManagecatComponent implements OnInit {

  o=''
  selectedFile:File = null;
  
  constructor( private http:HttpClient) { }

  

  ngOnInit() {
  }
  onFileSelected(event)
  {
    this.selectedFile=<File>event.target.files[0];
  }
  onClickSubmit(d)
  {
    const formData = new FormData();
    formData.append('cicon', this.selectedFile,this.selectedFile.name);
    formData.append('cnm',d.cnm)
   
    console.log(formData)
    this.http.post('http://localhost:3000/webapi/admin/managecat',formData).subscribe((data)=>this.showdata(data))
 
  }
  

  showdata(data)
  {
    this.o=data.result
  }
}

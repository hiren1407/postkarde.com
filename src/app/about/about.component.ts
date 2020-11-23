import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  mydate;
  constructor(private obj:MyserviceService) { }

  ngOnInit() {
    this.mydate=this.obj.showDate()

  }

}

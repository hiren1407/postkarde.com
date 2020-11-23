import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  public messager=''
  constructor(private myservice:MyserviceService) {
    this.myservice.newMessageReceived().subscribe(data=>this.showdata(data))
   }
   public user=''
 

  ngOnInit() {
  }


  public showdata(data)
{
  console.log(data)
  this.user=localStorage.getItem('email')
  if (this.user==data.user){

    this.messager=data.message

  }

}

}

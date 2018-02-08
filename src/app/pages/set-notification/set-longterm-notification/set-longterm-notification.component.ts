import { Component, OnInit } from '@angular/core';
import { InsertlongnotificationService } from '../../../services/insertlongnotification.service';

@Component({
  selector: 'app-set-longterm-notification',
  templateUrl: './set-longterm-notification.component.html',
  styleUrls: ['./set-longterm-notification.component.scss']
})
export class SetLongtermNotificationComponent implements OnInit {
   adminId:String;
   itemId:String;
   msg:String;
   day:Date;

  constructor(private insertlongnotificationService:InsertlongnotificationService) { }

  ngOnInit() {
  }
  setLongTermNotification(){
    const longTermNotification = {
   adminId:this.adminId,
    itemId:this.itemId,
    msg:this.msg,
    day:this.day
  };
    this.insertlongnotificationService.setLnotification(longTermNotification).subscribe(response=>{
    console.log(response);
  }
  );
}

}

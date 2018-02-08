import { Component, OnInit } from '@angular/core';
import { InsertmiddlenotificationService } from '../../../services/insertmiddlenotification.service';
import { ShowAllocationsService } from '../../../services/show-allocations.service';
import swal from 'sweetalert2'


@Component({
  selector: 'app-set-middleterm-notification',
  templateUrl: './set-middleterm-notification.component.html',
  styleUrls: ['./set-middleterm-notification.component.scss']
})
export class SetMiddletermNotificationComponent implements OnInit {
  employeeId:String;
      itemId:String;
      msg:String;
      day:Date;
      allocations: any;

      

  constructor
  (private insertmiddlenotificationService:InsertmiddlenotificationService,
   private showAllocationsService:ShowAllocationsService) { }

  ngOnInit() {
    this.showAllocationsService.getAllocatedItems().then((response) => {
  		this.	allocations = 	response;
  		console.log(this.	allocations);
  	}, (err)=>{
       console.log(err);
    });
  }
  setMiddleNotification(){
  const middleTermNotification = {
    employeeId:this.employeeId,
    itemId:this.itemId,
    msg:this.msg,
    day:this.day,
  };
  
  this.insertmiddlenotificationService.setMnotification(middleTermNotification).subscribe(response=>{
   console.log(response);
   swal(
     (response.message)
   )
  },
);
}
  clearNotification() {
    this.employeeId = null;
    this.itemId = null;
    this.msg = null;
    this.day = null;
  }


}

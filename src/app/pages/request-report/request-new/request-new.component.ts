import { Component, OnInit } from '@angular/core';
import { RequestNewService } from '../../../services/request-new.service'
import swal from 'sweetalert2';
import Sweetalert2 from 'sweetalert2';
@Component({
  selector: 'app-request-new',
  templateUrl: './request-new.component.html'
})
export class RequestNewComponent implements OnInit {
  itemName:String;
  itemType:String;
 itemsNeeded:Number;
  requestReason:String;
  requesteduser:String;

  constructor(public requestnew:RequestNewService) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.requesteduser=user.employeeId;
  }
    saverequestnewdata(){
  const requestnew = {
    itemName:this.itemName,
    itemType:this.itemType,
    itemsNeeded:this.itemsNeeded,
    requestReason:this.requestReason,
    requesteduser:this.requesteduser
    
  };

if(requestnew.itemName && requestnew.requestReason) {
   this.requestnew.requestnewdata(requestnew).subscribe(res=>{
    console.log(res);
      }); 
      swal(
        'Successfully Requested',
        'Your Request has been sent'
              )
}else{
  swal(
    'Unsuccessfully Requested',
    'Please Enter All the Fields'
  )
} 
  }
  }


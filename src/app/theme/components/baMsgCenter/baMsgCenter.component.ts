//import {Component} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2'
import { Router } from '@angular/router';

import { BaMsgCenterService } from './baMsgCenter.service';

@Component({
  selector: 'ba-msg-center',
  providers: [BaMsgCenterService],
  styleUrls: ['./baMsgCenter.scss'],
  templateUrl: './baMsgCenter.html'
})
export class BaMsgCenter implements OnInit {
  msg: any;

  // public notifications:Array<Object>;
  //public messages:Array<Object>;
  public notifications: any = [];
  public user: any;
  constructor(private _baMsgCenterService: BaMsgCenterService, private router:Router) { }
  ngOnInit() {
    var user = JSON.parse(localStorage.getItem('user'));
    /*this.notifications = this._baMsgCenterService.getNotifications();
    this.messages = this._baMsgCenterService.getMessages();*/
    this.getMyNotifications(user);
  }

  getMyNotifications(user){
    this._baMsgCenterService.getNotifications(user).subscribe(data => {
      this.notifications = data;

    }, (err) => {
      console.log(err);
    });
  }

  readNotification(id) {
    console.log('Notification id ', id)

    //nrtwork call with object id
    //res = notification []
    //notication = res
  }



  deleteNotification(id) {
   // debugger
    this._baMsgCenterService.deleteNotificationById(id).subscribe(response => {
      // let response = res.json();
      if (response.status) {
        //console.log(response);
        for (var index = 0; index < this.notifications.length; index++) {
          if (this.notifications[index]._id == response.id) {
            this.notifications = this.notifications.splice(index, 1);
          }
        }
        this.getMyNotifications(this.user);
       // console.log("not",this.notifications);
      }
      swal(
        (response.message)
      )
     // this.router.navigate(['/pages/dashboard']);
     this.ngOnInit() ;
    }, error => {
      alert("message not successfully deleted");
    });

  }
}

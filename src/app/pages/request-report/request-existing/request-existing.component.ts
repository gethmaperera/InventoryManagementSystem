import { Component, OnInit } from '@angular/core';
import { RequestExistingService } from '../../../services/request-existing.service'
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { Item } from '../../../models';
import {User} from'../../../models';
import swal from 'sweetalert2';
@Component({
  selector: 'app-request-existing',
  templateUrl: './request-existing.component.html'
})
export class RequestExistingComponent implements OnInit {
  public itemArray: Array<Item>;
  public userArray: Array<User>;
  user:User;
  itemType:String;
  itemName:String;
  itemId:String;
 employeeId:String;
 requesteduser:String;
  
  constructor(private router: Router, private route: ActivatedRoute,public requestexisting:RequestExistingService) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.requesteduser=user.employeeId;
  }

  
  saverequestexistingdata(){   
  
  const requestexisting = {
    
    itemType:this.itemType,
    itemName:this.itemName,
    itemId:this.itemId,
 employeeId:this.employeeId,
 requesteduser: this.requesteduser,

    
  };

if (requestexisting.itemName){
   this.requestexisting.requestexistingdata(requestexisting).subscribe(res=>{
    console.log(res);
  }); 
  swal(
    'Successfully Requested',
    'Your Item Inquiry has been sent '
  )
}else {
  swal(
    'Unsuccessfuly Requested',
    'Please Request With Valid Data'
    
  )
}
    
  }
  getItem() {
    this.requestexisting.getItemData(this.itemName).subscribe(data => {
      this.itemArray = []
      if(data.length > 0){
        data.forEach(element => {
          this.itemArray.push(element)
        });
      } 

      console.log(this.itemArray)

    })
  }
  getEmployeeData() {
    this.requestexisting.getEmployeeData(this.employeeId).subscribe(data => {
      this.userArray = []
      if (data.length > 0) {
        data.forEach(element => {
          this.user = element;
          this.userArray.push(element)
        });
      }
      console.log(this.userArray)
    })


  }


}

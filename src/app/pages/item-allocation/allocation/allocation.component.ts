import { NgModule, Component, Pipe, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ItemAllocationService } from '../../../services/item-allocation.service'
import { Item } from '../../../models';
import { User } from '../../../models';
import swal from 'sweetalert2';
@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html'
})
export class AllocationComponent implements OnInit {

  constructor(public itemallocationservice: ItemAllocationService) { }

  public itemArray: Array<Item>;
  public userArray: Array<User>;
  user: User;
  item: Item;
  data: any;
  itemId: String;
  itemName: String;
  employeeId: String;
  userName: String;
  username: String;
  itemType:String;
  userRole:String;
  ngOnInit() {
    var user=JSON.parse(localStorage.getItem('user'));
    this.userRole=user.userRole;
  }
  saveallocationdata() {

    const allocateitem = {
      itemId: this.itemId,
      itemName: this.itemArray[0].itemName,
      itemType: this.itemArray[0].itemType,
      employeeId: this.employeeId,
      userName: this.userName
    };

    if (allocateitem.itemId){
    this.itemallocationservice.itemallocationdata(allocateitem).subscribe(res => {
      console.log(res);
      swal(
        'Successfully Allocated'
        
      )
    });
  }
    else{
      swal(
        'Unsuccessful Allocation',
        'Please Enter Valid Data'
      
      )
    }


    
  }

  getItem() {
    this.itemallocationservice.getItemData(this.itemId).subscribe(data => {
      this.itemArray = []
      if (data.length > 0) {
        data.forEach(element => {
          this.item = element;
          this.itemArray.push(element)
        });
      }

      console.log(this.itemArray)

    })
  }
  reset() {
    this.itemArray = null;
    this.userArray = null;
    this.itemId=null;
    this.employeeId=null;
    this.itemType=null;
  }

  getEmployeeData() {
    this.itemallocationservice.getEmployeeData(this.employeeId).subscribe(data => {
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





import { Component, OnInit } from '@angular/core';
import { ManagereturnitemService } from '../../../services/managereturnitem.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-returns',
  templateUrl: './returns.component.html',
  styleUrls: ['./returns.component.scss']
})
export class ReturnsComponent implements OnInit {
  itemId:String;
  itemName:String;
  itemType: String;
  employeeId:String;
  day:Date;
  userRole:String;
  constructor(private managereturnitemService:ManagereturnitemService) { }

  ngOnInit() {
  }
    insertIntoAvailables(){
    const insertAvailables = {

    itemId:this.itemId,    
    itemName:this.itemName,
    itemType:this.itemType,
    employeeId:this.employeeId,
    day: new Date(),
    
  
  };
  this.managereturnitemService.insertAvailable(insertAvailables).subscribe(response=>{
   console.log(response);
   swal(
    (response.message)
  )
 
  }
  );
}

clearReturns() {
  
  this.itemId = null;
  this.itemName= null;
  this.employeeId = null;
  this.itemType = null;
  this.day = null;
  
 
}

}

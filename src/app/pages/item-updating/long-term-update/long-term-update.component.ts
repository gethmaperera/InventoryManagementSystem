import { Component, OnInit } from '@angular/core';
import { ManagelongupdateService } from '../../../services/managelongupdate.service';

@Component({
  selector: 'app-long-term-update',
  templateUrl: './long-term-update.component.html',
  styleUrls: ['./long-term-update.component.scss']
})
export class LongTermUpdateComponent implements OnInit {

  itemId: String;
  itemName: String;
  itemType: String;
  warrantyPeriod:String;

  constructor(private managelongupdateService:ManagelongupdateService) { }

  ngOnInit() {
  }

  setLongTermUpdate(){
    const longTermItem = {
    itemId:this.itemId,
    itemName:this.itemName,
    itemType:this.itemType,
    warrantyPeriod:this.warrantyPeriod
  };

  this.managelongupdateService.setLupdate(longTermItem).subscribe(response=>{
    console.log(response);
   });
 
   }

}





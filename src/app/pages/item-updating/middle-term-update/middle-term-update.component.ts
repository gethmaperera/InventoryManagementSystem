import { Component, OnInit } from '@angular/core';
import { ManagemiddleupdateService } from '../../../services/managemiddleupdate.service';

@Component({
  selector: 'app-middle-term-update',
  templateUrl: './middle-term-update.component.html',
  styleUrls: ['./middle-term-update.component.scss']
})
export class MiddleTermUpdateComponent implements OnInit {
       itemId: String;
       itemName: String;
       itemType: String;
       warrantyPeriod:String;

  constructor(private managemiddleupdateService:ManagemiddleupdateService) { }

  ngOnInit() {
  }

  setMiddleTermUpdate(){
    const middleTermItem = {
    itemId:this.itemId,
    itemName:this.itemName,
    itemType:this.itemType,
    warrantyPeriod:this.warrantyPeriod
  };
  this.managemiddleupdateService.setMupdate(middleTermItem).subscribe(response=>{
   console.log(response);
  });

  }
}






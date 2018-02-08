import { Component, OnInit } from '@angular/core';
import { ManagelongdeletionService } from '../../../services/managelongdeletion.service';

@Component({
  selector: 'app-long-term-deletion',
  templateUrl: './long-term-deletion.component.html',
  styleUrls: ['./long-term-deletion.component.scss']
})
export class LongTermDeletionComponent implements OnInit {

    
    itemName: String;
    itemQuantity:String;
    itemType: String;

  constructor(private managelongdeletionService:ManagelongdeletionService) { }

    ngOnInit() {
    }

  setLongTermDeletion(){
    const longTermItem = {
    
    itemName:this.itemName,
    itemQuantity:this.itemQuantity,
    itemType:this.itemType
  };
 this.managelongdeletionService.setLdeletion(longTermItem).subscribe(response=>{
   console.log(response);
  });

}

}

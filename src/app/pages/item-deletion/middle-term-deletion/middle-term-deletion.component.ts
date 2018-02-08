import { Component, OnInit } from '@angular/core';
// import { ManagemiddledeletionService } from '../../../services/managemiddledeletion.service';

@Component({
  selector: 'app-middle-term-deletion',
  templateUrl: './middle-term-deletion.component.html',
  styleUrls: ['./middle-term-deletion.component.scss']
})
export class MiddleTermDeletionComponent implements OnInit {

    itemId: String;
    itemName: String;
    itemType: String;
    warrantyPeriod:String;

    constructor( ) { }

  // constructor(private managemiddledeletionService:ManagemiddledeletionService) { }

  ngOnInit() {
  }

  setMiddleTermDeletion(){
    const middleTermItem = {
    itemId:this.itemId,
    itemName:this.itemName,
    itemType:this.itemType
  };
//  this.managemiddledeletionService.setMdeletion(middleTermItem).subscribe(response=>{
//    console.log(response);
//   });

}
}

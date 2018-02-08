import { Component, OnInit } from '@angular/core';
// import { ManageshortdeletionService } from '../../../services/manageshortdeletion.service';

@Component({
  selector: 'app-short-term-deletion',
  templateUrl: './short-term-deletion.component.html',
  styleUrls: ['./short-term-deletion.component.scss']
})
export class ShortTermDeletionComponent implements OnInit {

  itemId: String;
  itemName: String;
  itemType: String;

  constructor( ) { }

  // constructor(private manageshortdeletionService:ManageshortdeletionService) { }

  ngOnInit() {
  }

  setShortTermDeletion(){
    const shortTermItem = {
    itemId:this.itemId,
    itemName:this.itemName,
    itemType:this.itemType
  };
//  this.manageshortdeletionService.setSdeletion(shortTermItem).subscribe(response=>{
  //  console.log(response);
  // });

}

}

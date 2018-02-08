import { Component, OnInit } from '@angular/core';
import { ManageshortupdateService } from '../../../services/manageshortupdate.service';

@Component({
  selector: 'app-short-term-update',
  templateUrl: './short-term-update.component.html',
  styleUrls: ['./short-term-update.component.scss']
})
export class ShortTermUpdateComponent implements OnInit {

  itemId: String;
  itemName: String;
  itemType: String;

  constructor(private manageshortupdateService:ManageshortupdateService) { }

  ngOnInit() {
  }

  setShortTermUpdate(){
    const shortTermItem = {
    itemId:this.itemId,
    itemName:this.itemName,
    itemType:this.itemType
    
  };
  this.manageshortupdateService.setSupdate(shortTermItem).subscribe(response=>{
   console.log(response);
  });

  }

}



import { Component,OnInit} from '@angular/core';
import {BaThemeConfigProvider} from '../../../theme';
import { Item } from '../../../models';
import {ItemTypeService} from '../../../services/item-type.service';

@Component({
  selector: 'app-itemtype',
  templateUrl: './itemtype.component.html',
  styleUrls: ['./itemtype.component.scss']
})
export class ItemtypeComponent implements OnInit {

     constructor(private _baConfig:BaThemeConfigProvider, private _Service:ItemTypeService) {  
    }
  
    itemType:String;
    insertType(){
      
    const itemtype = {
      itemType: this.itemType,
          };

    this._Service.insertType(itemtype).subscribe(res => {
      console.log(res);
    });
    }
    
    ngOnInit() {
      // this._Service.showTypes().then((response) => {
      //   this.	itemT = 	response;
      //   console.log(this.	availables);
      // }, (err)=>{
      //    console.log(err);
      // });
    }
    
}

import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { ItemviewService } from '../../../services/itemview.service';
import { Item } from '../../../models';

@Component({
  selector: 'app-itemview',
  templateUrl: './itemview.component.html',
  styleUrls: ['./itemview.component.scss']
})
export class ItemviewComponent implements OnInit {
  public itemArray: Array<Item>;
  item : Item ;
  data: any;
  public itemId: String;
  public itemName: String;
  private sub : any;
 public itemid:String;
  constructor(private router: Router, private route: ActivatedRoute, private itemviewservice: ItemviewService) { 

  }

  ngOnInit(): any {
    this.sub = this.route.params.subscribe(params => {
      this.itemId = params['itemId']; 
   });
   this.getItem();
    
  }
  getItem() {
    this.itemviewservice.getItemsData(this.itemId).subscribe(data => {      
      this.itemArray = []
      if (data.length > 0) {
        data.forEach(element => {
          this.item = element;
          this.itemArray.push(element)
        });
      }

     

    })
  }
  

}

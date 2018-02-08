import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../../../../services/validate.service';
import swal from 'sweetalert2'
import { Router } from '@angular/router';
import { InsertItemsService } from '../../../../../services/insert-items.service';

@Component({
  selector: 'app-short-term-item',
  templateUrl: './short-term-item.component.html',
})
export class ShortTermItem{
  itemName: string;
  itemType: string;
  itemQuantity : string;
  itemWarehouse : string;
  reorderLevel: string;
  reorderTime: string;
  itemDescription : string;  
  itemDate: Date;
  userRole:string;
  

  constructor(
    private insertItemsService: InsertItemsService,
    private router: Router,
    private validateService: ValidateService
  ) { }

  ngOnInit() {
    this.itemDate = new Date();
    var user = JSON.parse(localStorage.getItem('user'));
    this.userRole = user.userRole;
  }
  

  onShortTermItemSubmit(){
    const shortTermItem = {
      itemName: this.itemName,
      itemType: this.itemType,
      itemQuantity: this.itemQuantity,
      itemWarehouse: this.itemWarehouse,
      reorderLevel: this.reorderLevel,
      reorderTime: this.reorderTime,
      itemDescription: this.itemDescription,
      itemDate: this.itemDate

    }

  //  Required Fields
    if(!this.validateService.validateShortItem(shortTermItem)){
      console.log(!this.validateService.validateShortItem(shortTermItem));
      swal(
        'Oops...',
        'All Fields are required!',
        'error'
      )
      return false;
    }

  //  Insert Short Term Item
      
    this.insertItemsService.insertShortTermItem(shortTermItem).subscribe(data => {
      if(data.success){
        swal(
          'Done!',
          'Item Inserted Successfully..!',
          'success'
        )
        this.router.navigate(['/pages/forms/shortTermItemInsert']);
      } else {
        swal(
          'Done!',
          'Item Inserted Successfully..!',
          'success'
        )
        this.router.navigate(['/pages/forms/shortTermItemInsert']);
      }
    });

  }


}

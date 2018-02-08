import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { InsertItemsService } from '../../../../../services/insert-items.service';
import swal from 'sweetalert2'


@Component({
  selector: 'app-long-term-item',
  templateUrl: './long-term-item.component.html'

})
export class LongTermItem implements OnInit {
  itemId: string;
  itemName: string;
  itemType: string;
  itemQuantity: string;
  invoiceNumber: string;
  itemDate: Date;
  warrantyType: string;
  warrantyQuantity: string;
  referenceId: string;
  itemWarehouse: string;
  itemDescription: string;
  userRole: string;

  constructor(
    private validateService: ValidateService,
    private insertItemsService: InsertItemsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.itemDate = new Date();
    var user = JSON.parse(localStorage.getItem('user'));
    this.userRole = user.userRole;
  }

  onLongTermItemSubmit() {
    const longTermItem = {
      itemId: this.referenceId,
      itemName: this.itemName,
      itemType: this.itemType,
      itemQuantity: this.itemQuantity,
      invoiceNumber: this.invoiceNumber,
      warrantyType: this.warrantyType,
      warrantyQuantity: this.warrantyQuantity,
      referenceId: this.referenceId,
      itemWarehouse: this.itemWarehouse,
      itemDescription: this.itemDescription,
      itemDate: this.itemDate
    }

    //  Required Fields
    if (!this.validateService.validateLongtItem(longTermItem)) {
      swal(
        'Oops...',
        'All Fields are required!',
        'error'
      )
      return false;
    }

    //check availability
    this.insertItemsService.checkLongTermItemAvailability(longTermItem).subscribe(data => {
      if (data.status) {
        console.log(data.status);
        swal(
          'Oops...',
          'Item Already Inserted!',
          'error'
        )
        this.router.navigate(['/pages/dashboard']);
      } else {

        //item insert
        this.insertItemsService.insertLongTermItem(longTermItem).subscribe(data => {
          if (data.success) {
            swal(
              'Done',
              'Item Inserted successfully..!',
              'success'
            )
            this.router.navigate(['/pages/dashboard']);
          } else {
            swal(
              'Oops...',
              'Insertion is Failed..!',
              'error'
            )
            this.router.navigate(['/pages/forms/longTermItemInsert']);
          }
        });



      }
    });



  }
}

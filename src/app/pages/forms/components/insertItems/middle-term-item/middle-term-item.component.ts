import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../../../../services/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { InsertItemsService } from '../../../../../services/insert-items.service';
import { ItemTypeService } from '../../../../../services/item-type.service';
import swal from 'sweetalert2'


@Component({
  selector: 'app-middle-term-item',
  templateUrl: './middle-term-item.component.html',



})
export class MiddleTermItem implements OnInit {

  public elementType: 'url' | 'canvas' | 'img' = 'url';
  public value: string = 'Laptop123';


  itemId: string;
  itemName: string;
  itemType: string;
  itemBrand: string;
  itemQuantity: number;
  invoiceNumber: string;
  warrantyType: string;
  warrantyQuantity: string;
  referenceId: string;
  itemWarehouse: string;
  itemDescription: string;
  itemDate: Date;
  userRole: string;

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




  onMiddleTermItemSubmit() {
    const middleTermItem = {
      itemId: this.referenceId,
      itemName: this.itemName,
      itemType: this.itemType,
      itemBrand: this.itemBrand,
      invoiceNumber: this.invoiceNumber,
      warrantyType: this.warrantyType,
      warrantyQuantity: this.warrantyQuantity,
      referenceId: this.referenceId,
      itemWarehouse: this.itemWarehouse,
      itemDescription: this.itemDescription,
      itemDate: this.itemDate
    }


    //  Required Fields
    if (!this.validateService.validateMiddleItem(middleTermItem)) {
      swal(
        'Oops...',
        'All Fields are required!',
        'error'
      )
      return false;
    }

    //check availability
    this.insertItemsService.checkMiddleTermItemAvailability(middleTermItem).subscribe(data => {
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
        this.insertItemsService.insertMiddleTermItem(middleTermItem).subscribe(data => {
          if (data.success) {
            this.insertItemsService.insertMiddleTermItemToAvailable(middleTermItem).subscribe(data => {
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
                this.router.navigate(['/pages/forms/middleTermItemInsert']);
              }
            });

          } else {
            swal(
              'Oops...',
              'Insertion is Failed..!',
              'error'
            )
          }
        });

      }
    });




  }



  onMiddleTermItemMultipleSubmit() {

    const middleTermItem = {
      itemId: this.referenceId,
      itemName: this.itemName,
      itemType: this.itemType,
      itemBrand: this.itemBrand,
      invoiceNumber: this.invoiceNumber,
      warrantyType: this.warrantyType,
      warrantyQuantity: this.warrantyQuantity,
      referenceId: this.referenceId,
      itemWarehouse: this.itemWarehouse,
      itemDescription: this.itemDescription,
      itemDate: this.itemDate
    }

    //  Required Fields
    if (!this.validateService.validateMiddleItem(middleTermItem)) {
      swal(
        'Oops...',
        'All Fields are required!',
        'error'
      )
      return false;
    }

    //check availability
    this.insertItemsService.checkMiddleTermItemAvailability(middleTermItem).subscribe(data => {
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
        this.itemQuantity--;
        this.insertItemsService.insertMiddleTermItem(middleTermItem).subscribe(data => {
          if (data.success) {
            this.insertItemsService.insertMiddleTermItemToAvailable(middleTermItem).subscribe(data => {
              if (data.success) {
                swal(
                  'Next',
                  'Item Inserted successfully..!',
                  'success'
                )
                this.router.navigate(['/pages/forms/middleTermItemInsert']);
              } else {
                swal(
                  'Oops...',
                  'Insertion is Failed..!',
                  'error'
                )
                this.router.navigate(['/pages/dashboard']);
              }
            });

            if (this.itemQuantity == 0) {
              this.router.navigate(['/pages/dashboard']);
            } else { }

          } else {
            swal(
              'Oops...',
              'Insertion is Failed..!',
              'error'
            )
            this.router.navigate(['/pages/forms/middleTermItemInsert']);
          }
        });

      }
    });



  }
}


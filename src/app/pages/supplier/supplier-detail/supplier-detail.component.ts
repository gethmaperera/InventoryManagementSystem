import { Component, OnInit } from '@angular/core';
import { ManagesupplierdetailService } from '../../../services/managesupplierdetail.service';
//import { ValidateService } from '../../../service/validate.service';
// import {FlashMessage} from 'angular-flash-message';
import { Router } from '@angular/router';
import swal from 'sweetalert2'


@Component({
  selector: 'app-supplier-detail',
  templateUrl: './supplier-detail.component.html',
  styleUrls: ['./supplier-detail.component.scss']
}) 
export class SupplierDetailComponent implements OnInit {
  supplierId: String;
  supplierName: String;
  companyPhoneNumber: String;
  contactPersonName: String;
  contactNumber: String;
  supplierItemTypes: String;

  constructor(private managesupplierdetailService:ManagesupplierdetailService ) { }

  // constructor(private managesupplierdetailService:ManagesupplierdetailService ,private validateService:ValidateService,private flashMessage: FlashMessage) { }

  ngOnInit() {
  }
  setSupplierDetails(){
    const supplierDetail = {
    supplierId:this.supplierId,
    supplierName:this.supplierName,
    companyPhoneNumber:this.companyPhoneNumber,
    contactPersonName:this.contactPersonName,
    contactNumber:this.contactNumber,
    supplierItemTypes:this.supplierItemTypes
  };
 

  this.managesupplierdetailService.setSdetails(supplierDetail).subscribe(response=>{
    if(response.success){
      swal(
        'Done!',
        'Item Inserted Successfully..!',
        'success'
      )
     } else {
      swal(
        'Done!',
        'Item Inserted Successfully..!',
        'success'
      )
     }
  });

}


}




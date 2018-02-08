import { Component, OnInit } from '@angular/core';
import { ManagesupplierdetailupdateService } from '../../../services/managesupplierdetailupdate.service';

@Component({
  selector: 'app-supplier-detail-update',
  templateUrl: './supplier-detail-update.component.html',
  styleUrls: ['./supplier-detail-update.component.scss']
})
export class SupplierDetailUpdateComponent implements OnInit {
        supplierId: String;
        supplierName: String;
        companyPhoneNumber: String;
        contactPersonName: String;
        contactNumber: String;
        supplierItemTypes: String; 

  constructor(private managesupplierdetailupdateService:ManagesupplierdetailupdateService) { }

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
  this.managesupplierdetailupdateService.setSdetailsupdate(supplierDetail).subscribe(response=>{
    console.log(response);
  });

}


}


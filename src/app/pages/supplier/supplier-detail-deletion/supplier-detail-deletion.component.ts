import { Component, OnInit } from '@angular/core';
import { ManagesupplierdetaildeletionService } from '../../../services/managesupplierdetaildeletion.service';

@Component({
  selector: 'app-supplier-detail-deletion',
  templateUrl: './supplier-detail-deletion.component.html',
  styleUrls: ['./supplier-detail-deletion.component.scss']
})
export class SupplierDetailDeletionComponent implements OnInit {
        supplierId: String;
        supplierName: String;
        companyPhoneNumber: String;
        contactPersonName: String;
        contactNumber: String;
        supplierItemTypes: String;


  constructor(private managesupplierdetaildeletionService:ManagesupplierdetaildeletionService) { }

  ngOnInit() {
  }
  deleteSupplierDetails(){
    const supplierDetail = {
    supplierId:this.supplierId,
    supplierName:this.supplierName,
    companyPhoneNumber:this.companyPhoneNumber,
    contactPersonName:this.contactPersonName,
    contactNumber:this.contactNumber,
    supplierItemTypes:this.supplierItemTypes
  };
  this.managesupplierdetaildeletionService.setSdetailsdeletion(supplierDetail).subscribe(response=>{
    console.log(response);
  });
  }

}


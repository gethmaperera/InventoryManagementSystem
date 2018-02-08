import { Routes, RouterModule } from '@angular/router';

import { SupplierComponent } from './supplier.component';
import { SupplierDetailDeletionComponent } from './supplier-detail-deletion/supplier-detail-deletion.component';
import { SupplierDetailUpdateComponent } from './supplier-detail-update/supplier-detail-update.component';
import { SupplierDetailComponent } from './supplier-detail/supplier-detail.component';


const routes: Routes = [
    {
      path: '',
      component: SupplierComponent,
      children: [     
        { path: 'supplierdetaildeletion', component: SupplierDetailDeletionComponent },
        { path: 'supplierdetailupdate', component: SupplierDetailUpdateComponent },
        { path: 'supplierdetail', component: SupplierDetailComponent }
        
      ]
    }
  ];

  
  export const routing = RouterModule.forChild(routes); 

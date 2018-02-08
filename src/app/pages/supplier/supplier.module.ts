import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';


import { routing }       from './supplier.routing';
import { SupplierComponent } from './supplier.component';
import { SupplierDetailDeletionComponent } from './supplier-detail-deletion/supplier-detail-deletion.component';
import { SupplierDetailUpdateComponent } from './supplier-detail-update/supplier-detail-update.component';
import { SupplierDetailComponent } from './supplier-detail/supplier-detail.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    
    routing
  ],
  declarations: [
    SupplierComponent,
    SupplierDetailDeletionComponent,
    SupplierDetailUpdateComponent,
    SupplierDetailComponent

  ]
})
export class SupplierModule {}



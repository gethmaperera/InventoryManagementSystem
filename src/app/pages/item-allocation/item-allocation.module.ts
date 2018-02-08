import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';


import { routing }       from './item-allocation.routing';
import { ItemAllocationComponent } from './item-allocation.component';
import { AllocationComponent  } from './allocation/allocation.component';
import { ItemtypeComponent } from './itemtype/itemtype.component';
import { ItemviewComponent } from './itemview/itemview.component';
import { AvailableComponent } from './available/available.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,    
    routing
  ],
  declarations: [
    ItemAllocationComponent,
    AllocationComponent,
    ItemtypeComponent,
    ItemviewComponent,
    ItemtypeComponent,
    AvailableComponent
    
  ]
})
export class ItemAllocationModule {}

import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';


import { routing }       from './item-available.routing';
import { ItemAvailableComponent } from './item-available.component';
import { AvailableComponent } from './available/available.component';
import { AllocatedComponent } from './allocated/allocated.component';
import { AvailableMoreDetailsComponent } from './available-more-details/available-more-details.component';
import { ViewLastAllocationComponent } from './view-last-allocation/view-last-allocation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    
    routing
  ],
  declarations: [
    ItemAvailableComponent,
   AvailableComponent,
   AllocatedComponent,
   AvailableMoreDetailsComponent,
   ViewLastAllocationComponent
  ]
})
export class ItemAvailableModule {}

import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';


import { routing } from './ba-msg-center.routing';
import { BaMsgCenterComponent } from './ba-msg-center.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    
    routing
  ],
  declarations: [
    BaMsgCenterComponent
   
  ]
})
export class ItemAvailableModule {}

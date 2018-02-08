import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';


import { routing } from './item-return.routing';
import { ItemReturnComponent } from './item-return.component';
import { ReturnsComponent } from './returns/returns.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    
    routing
  ],
  declarations: [
    ItemReturnComponent,
    ReturnsComponent
  ]
})
export class ItemReturnModule {}

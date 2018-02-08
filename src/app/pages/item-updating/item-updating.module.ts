import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';


import { routing }       from './item-updating.routing';
import { ItemUpdatingComponent } from './item-updating.component';
import { ShortTermUpdateComponent } from './short-term-update/short-term-update.component';
import { MiddleTermUpdateComponent } from './middle-term-update/middle-term-update.component';
import { LongTermUpdateComponent } from './long-term-update/long-term-update.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    
    routing
  ],
  declarations: [
    ItemUpdatingComponent,
    ShortTermUpdateComponent,
    MiddleTermUpdateComponent,
    LongTermUpdateComponent

  ]
})
export class ItemUpdatingModule {}

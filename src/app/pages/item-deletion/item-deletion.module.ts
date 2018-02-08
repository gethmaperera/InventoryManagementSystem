import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';


import { routing }       from './item-deletion.routing';
import { ItemDeletionComponent } from './item-deletion.component';
import { ShortTermDeletionComponent } from './short-term-deletion/short-term-deletion.component';
import { MiddleTermDeletionComponent } from './middle-term-deletion/middle-term-deletion.component';
import { LongTermDeletionComponent } from './long-term-deletion/long-term-deletion.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    
    routing
  ],
  declarations: [
    ItemDeletionComponent,
    ShortTermDeletionComponent,
    MiddleTermDeletionComponent,
    LongTermDeletionComponent

  ]
})
export class ItemDeletionModule {}

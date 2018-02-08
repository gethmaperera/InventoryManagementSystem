import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';


import { routing } from './set-notification.routing';
import { SetNotificationComponent } from './set-notification.component';
import { SetLongtermNotificationComponent } from './set-longterm-notification/set-longterm-notification.component';
import 
{ SetMiddletermNotificationComponent } from './set-middleterm-notification/set-middleterm-notification.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing 
  ],
  declarations: [
    SetNotificationComponent,
    SetLongtermNotificationComponent,
    SetMiddletermNotificationComponent
  ]
})
export class SetNotificationModule {}

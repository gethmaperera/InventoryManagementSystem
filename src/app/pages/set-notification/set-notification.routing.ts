import { Routes, RouterModule } from '@angular/router';

import { SetNotificationComponent } from './set-notification.component';
import { SetLongtermNotificationComponent } from './set-longterm-notification/set-longterm-notification.component';
import
 { SetMiddletermNotificationComponent } from './set-middleterm-notification/set-middleterm-notification.component';



// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: SetNotificationComponent,
    children: [     
      { path: 'setlongnotification', component: SetLongtermNotificationComponent },
      { path: 'setmiddlenotification', component: SetMiddletermNotificationComponent }
      
    ]
  }
];

export const routing = RouterModule.forChild(routes);
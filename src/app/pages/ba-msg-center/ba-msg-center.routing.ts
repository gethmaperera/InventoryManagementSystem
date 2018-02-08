import { Routes, RouterModule }  from '@angular/router';

import { BaMsgCenterComponent } from './ba-msg-center.component';



// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: BaMsgCenterComponent 
   
  }
];

export const routing = RouterModule.forChild(routes);
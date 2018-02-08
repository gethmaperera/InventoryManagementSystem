import { Routes, RouterModule }  from '@angular/router';

import { ItemReturnComponent } from './item-return.component';
import { ReturnsComponent } from './returns/returns.component';



// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ItemReturnComponent ,
    children: [     
      { path: 'itemreturn', component: ReturnsComponent  }
     
    ]
  }
];

export const routing = RouterModule.forChild(routes);
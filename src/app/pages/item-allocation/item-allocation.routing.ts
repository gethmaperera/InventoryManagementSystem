import { Routes, RouterModule }  from '@angular/router';

import { ItemAllocationComponent } from './item-allocation.component';
import { AllocationComponent  } from './allocation/allocation.component';
import { ItemtypeComponent } from './itemtype/itemtype.component';
import {ItemviewComponent} from './itemview/itemview.component'

import {ReportComponent} from '../request-report/report/report.component'
import{RequestExistingComponent} from '../request-report/request-existing/request-existing.component'
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ItemAllocationComponent,
    children: [     
      { path: 'allocation', component: AllocationComponent },
      
      { path: 'itemtype', component: ItemtypeComponent },      
      
      { path: 'itemview/:itemId', component: ItemviewComponent }

    ]
  }
];

export const routing = RouterModule.forChild(routes);

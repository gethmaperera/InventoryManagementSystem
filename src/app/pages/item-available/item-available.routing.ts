import { Routes, RouterModule }  from '@angular/router';

import { ItemAvailableComponent } from './item-available.component';
import { AvailableComponent } from './available/available.component';
import { AllocatedComponent } from './allocated/allocated.component';
import { AvailableMoreDetailsComponent } from './available-more-details/available-more-details.component';
import { ViewLastAllocationComponent} from './view-last-allocation/view-last-allocation.component';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ItemAvailableComponent ,
    children: [     
      { path: 'showavailables', component: AvailableComponent },
      { path: 'showallocations', component: AllocatedComponent },
     {path: 'showmoreavailables', component: AvailableMoreDetailsComponent }, 
     {path: 'showlastreturns', component: ViewLastAllocationComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
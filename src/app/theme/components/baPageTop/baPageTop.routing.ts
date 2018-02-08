import { Routes, RouterModule }  from '@angular/router';

import { BaPageTop } from './baPageTop.component';
import { ModuleWithProviders } from '@angular/core';
import { ItemviewComponent } from '../../../pages/item-allocation/itemview/itemview.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {    path: '',    component: BaPageTop  }
 
  
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
import { Routes, RouterModule }  from '@angular/router';

import { Login } from './login.component';
import { ModuleWithProviders } from '@angular/core';
import { Dashboard } from '../dashboard/dashboard.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Login
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

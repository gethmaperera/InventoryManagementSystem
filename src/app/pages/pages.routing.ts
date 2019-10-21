import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule',
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule',
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule',
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
     { path: 'request-report', loadChildren: './request-report/request-report.module#RequestReportModule' },
     { path: 'item-allocation', loadChildren: './item-allocation/item-allocation.module#ItemAllocationModule' },
         
      { path: 'item-available', loadChildren: './item-available/item-available.module#ItemAvailableModule' },
      { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
      { path: 'item-return', loadChildren: './item-return/item-return.module#ItemReturnModule' },     
      { path: 'set-notification', loadChildren: './set-notification/set-notification.module#SetNotificationModule' },
      { path: 'item-deletion', loadChildren: './item-deletion/item-deletion.module#ItemDeletionModule' },
      { path: 'item-updating', loadChildren: './item-updating/item-updating.module#ItemUpdatingModule' },
      { path: 'supplier', loadChildren: './supplier/supplier.module#SupplierModule' }
      
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

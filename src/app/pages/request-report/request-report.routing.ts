import { Routes, RouterModule }  from '@angular/router';

import { RequestReportComponent } from './request-report.component';
import { ReportComponent } from './report/report.component';
import { RequestExistingComponent } from './request-existing/request-existing.component';
import { RequestNewComponent } from './request-new/request-new.component';
import { ViewComponent } from './view/view.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: RequestReportComponent,
    children: [   
     { path: 'reportItem', component: ReportComponent },
     { path: 'requestExistingItem', component: RequestExistingComponent },  
     { path: 'requestNewItem', component: RequestNewComponent },
      {path:'view',component:ViewComponent}

    ]
  }
];

export const routing = RouterModule.forChild(routes);

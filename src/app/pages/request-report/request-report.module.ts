import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';


import { routing }       from './request-report.routing';
import { RequestReportComponent } from './request-report.component';
import { ReportComponent } from './report/report.component';
import { RequestExistingComponent } from './request-existing/request-existing.component';
import { RequestNewComponent } from './request-new/request-new.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    
    routing
  ],
  declarations: [
    RequestReportComponent,
    ReportComponent,
    RequestExistingComponent,
    RequestNewComponent,
    ViewComponent
  ]
})
export class RequestReportModule {}

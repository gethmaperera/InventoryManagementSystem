import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';


//services
import{ReportItemService} from '../services/report-item.service';
import{RequestNewService} from '../services/request-new.service';
import{RequestExistingService} from '../services/request-existing.service';
import{ItemAllocationService} from '../services/item-allocation.service';
import { ValidateService } from '../services/validate.service';
import { AuthService } from '../services/auth.service';
import { InsertItemsService } from '../services/insert-items.service';
import{ItemviewService} from '../services/itemview.service';
import { ItemTypeService } from '../services/item-type.service';
import{ShowavailableService} from '../services/showavailable.service';
import{ShowmoreavailablesService } from '../services/showmoreavailables.service';
import{ManagereturnitemService} from '../services/managereturnitem.service';
import { ViewRequestReportService } from '../services/viewreportrequest.service'

import { InsertmiddlenotificationService } from '../services/insertmiddlenotification.service';
import { InsertlongnotificationService } from '../services/insertlongnotification.service';
import { ShowAllocationsService } from '../services/show-allocations.service';

import { ManagelongdeletionService } from '../services/managelongdeletion.service';
import { ManagemiddledeletionService } from '../services/managemiddledeletion.service';
import { ManageshortdeletionService } from '../services/manageshortdeletion.service';

import { ManagesupplierdetailService } from '../services/managesupplierdetail.service';
import { ManagesupplierdetaildeletionService } from '../services/managesupplierdetaildeletion.service';
import { ManagesupplierdetailupdateService } from '../services/managesupplierdetailupdate.service';

import { ManagelongupdateService } from '../services/managelongupdate.service';
import { ManagemiddleupdateService } from '../services/managemiddleupdate.service';
import { ManageshortupdateService } from '../services/manageshortupdate.service';





import { UsersDetailsService } from '../services/users-details.service';
//import { AuthGuard } from './guards/auth.guard';


import { Pages } from './pages.component';
import { from } from 'rxjs/observable/from';


@NgModule({
  imports: [
    CommonModule, 
    AppTranslationModule, 
    NgaModule, 
    routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ValidateService,
    InsertItemsService,
    ReportItemService,
    RequestNewService,
    ViewRequestReportService,
    ItemAllocationService,
    RequestExistingService,
    ItemTypeService,
    ItemviewService,
    UsersDetailsService,
    AuthService,
    ShowavailableService,
    ManagereturnitemService,
    InsertmiddlenotificationService,
    InsertlongnotificationService,
    ShowAllocationsService,
    ManagelongdeletionService,
    ManagemiddledeletionService,
    ManageshortdeletionService,
    ManagesupplierdetailService,
    ManagesupplierdetaildeletionService,
    ManagesupplierdetailupdateService,
    ManagelongupdateService,
    ManagemiddleupdateService,
    ManageshortupdateService,
    ShowmoreavailablesService ,
    UsersDetailsService
  ],
  declarations: [Pages]
})
export class PagesModule {
}
 

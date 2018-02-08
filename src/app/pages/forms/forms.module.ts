import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { routing }       from './forms.routing';

import { Forms } from './forms.component';
import { Inputs } from './components/inputs';
import { Layouts } from './components/layouts';
import { ShortTermItem } from './components/insertItems/short-term-item';
import { MiddleTermItem } from './components/insertItems/middle-term-item';
import { LongTermItem } from './components/insertItems/long-term-item';
import { NgxQRCodeModule } from 'ngx-qrcode2';



import { StandardInputs } from './components/inputs/components/standardInputs';
import { ValidationInputs } from './components/inputs/components/validationInputs';
import { GroupInputs } from './components/inputs/components/groupInputs';
import { CheckboxInputs } from './components/inputs/components/checkboxInputs';
import { Rating } from './components/inputs/components/ratinginputs';
import { SelectInputs } from './components/inputs/components/selectInputs';

import { InlineForm } from './components/layouts/components/inlineForm';
import { BlockForm } from './components/layouts/components/blockForm';
import { HorizontalForm } from './components/layouts/components/horizontalForm';
import { BasicForm } from './components/layouts/components/basicForm';
import { WithoutLabelsForm } from './components/layouts/components/withoutLabelsForm';

import { FlashMessagesModule  } from 'angular2-flash-messages';
import { SetRoleComponent } from './components/set-role/set-role.component';
import { ResetAccountsComponent } from './components/reset-accounts/reset-accounts.component';




@NgModule({
  imports: [
    CommonModule,
    AngularFormsModule,
    AppTranslationModule,
    NgaModule,
    NgbRatingModule,
    routing,
    NgxQRCodeModule,
    FlashMessagesModule,

 
  ],
  declarations: [
    Layouts,
    Inputs,
    ShortTermItem,
    MiddleTermItem,
    LongTermItem,
    Forms,
    StandardInputs,
    ValidationInputs,
    GroupInputs,
    CheckboxInputs,
    Rating,
    SelectInputs,
    InlineForm,
    BlockForm,
    HorizontalForm,
    BasicForm,
    WithoutLabelsForm,
    SetRoleComponent,
    ResetAccountsComponent
  ]
})
export class FormsModule {
}

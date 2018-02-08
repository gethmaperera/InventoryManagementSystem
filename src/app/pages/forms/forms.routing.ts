import { Routes, RouterModule }  from '@angular/router';

import { Forms } from './forms.component';
import { Inputs } from './components/inputs/inputs.component';
import { Layouts } from './components/layouts/layouts.component';
import { ShortTermItem } from './components/insertItems/short-term-item/short-term-item.component';
import { MiddleTermItem } from './components/insertItems/middle-term-item/middle-term-item.component';
import { LongTermItem } from './components/insertItems/long-term-item/long-term-item.component';
import { SetRoleComponent } from './components/set-role/set-role.component';
import { ResetAccountsComponent } from './components/reset-accounts/reset-accounts.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Forms,
    children: [
      { path: 'inputs', component: Inputs },
      { path: 'layouts', component: Layouts },
      { path: 'shortTermItemInsert', component: ShortTermItem },
      { path: 'middleTermItemInsert', component: MiddleTermItem },
      { path: 'longTermItemInsert', component: LongTermItem },
      { path: 'setRole', component: SetRoleComponent },
      { path: 'resetAccount', component: ResetAccountsComponent },
    ]
  }
];

export const routing = RouterModule.forChild(routes);

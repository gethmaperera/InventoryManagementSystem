import { Routes, RouterModule } from '@angular/router';

import { ItemUpdatingComponent } from './item-updating.component';
import { ShortTermUpdateComponent } from './short-term-update/short-term-update.component';
import { MiddleTermUpdateComponent } from './middle-term-update/middle-term-update.component';
import { LongTermUpdateComponent } from './long-term-update/long-term-update.component';


const routes: Routes = [
    {
      path: '',
      component: ItemUpdatingComponent,
      children: [     
        { path: 'shorttermupdate', component: ShortTermUpdateComponent },
        { path: 'middletermupdate', component: MiddleTermUpdateComponent },
        { path: 'longtermupdate', component: LongTermUpdateComponent }
        
      ]
    }
  ];

  
  export const routing = RouterModule.forChild(routes); 
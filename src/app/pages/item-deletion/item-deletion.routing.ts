import { Routes, RouterModule } from '@angular/router';

import { ItemDeletionComponent } from './item-deletion.component';
import { ShortTermDeletionComponent } from './short-term-deletion/short-term-deletion.component';
import { MiddleTermDeletionComponent } from './middle-term-deletion/middle-term-deletion.component';
import { LongTermDeletionComponent } from './long-term-deletion/long-term-deletion.component';


const routes: Routes = [
    {
      path: '',
      component: ItemDeletionComponent,
      children: [     
        { path: 'shorttermdeletion', component: ShortTermDeletionComponent },
        { path: 'middletermdeletion', component: MiddleTermDeletionComponent },
        { path: 'longtermdeletion', component: LongTermDeletionComponent }
        
      ]
    }
  ];

  
  export const routing = RouterModule.forChild(routes); 
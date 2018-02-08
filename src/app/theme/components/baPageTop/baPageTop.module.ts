import { NgModule }      from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { BaPageTop } from './baPageTop.component';
import { routing }       from './baPageTop.routing';
@NgModule({

imports: [
    routing
],
declarations: [
    BaPageTop
]

})

export class baPageMOdule {}

import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';

import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pages',
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    
    <ba-back-top position="200"></ba-back-top>
    `
})
export class Pages {

  constructor(
    private _menuService: BaMenuService, 
    private authService:AuthService,
    private router:Router,) {
  }

  ngOnInit() {
    if(localStorage.getItem('id_token')){
      this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
    }else{
      this.router.navigate(['/login']);
    }
  }
}

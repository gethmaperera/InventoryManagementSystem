import {Component,OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard implements OnInit {
  authToken: any;
  user: any;
 

  constructor(
    private authService:AuthService,
    private router:Router,
  ) {
  }
  ngOnInit() {
    this.authService.loadToken();
    if(!localStorage.getItem('id_token')){
      this.router.navigate(['/login']);  
    }
  }
  
  

}

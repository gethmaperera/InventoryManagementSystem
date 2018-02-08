import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../../pipes/search/filter.pipe';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { GlobalState } from '../../../global.state';
import { BagPagetopService } from './bapage.servise';
import { Router } from '@angular/router';
import {ProfileService} from '../../../pages/profile/profile.service';

class Url{
 success:boolean;
 status:string;
 message:string;
 photodata:string;
}

@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
  styleUrls: ['./baPageTop.scss'],
  providers: [ProfileService,BagPagetopService]


})

export class BaPageTop implements OnInit {
  
  searchterm: String;
  searchTopForm: FormGroup;
  showData: boolean;
  public value = [];  

  url:Url = {
    success:false,
    status: "",
    message:"",
    photodata:""
    }

    userId:string ;

  public isScrolled: boolean = false;
  public isMenuCollapsed: boolean = false;

   
    
  showDropDown = false;

  constructor(private _state: GlobalState,
    private authService: AuthService,
    private router: Router, 
    private fb: FormBuilder,
    private bageService: BagPagetopService,
    private profileService:ProfileService) {
      this.initForm();
      this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
        this.isMenuCollapsed = isCollapsed;
      });
  }
  valuechange($event) {
    var length = this.searchterm.length;
    if (length >= 1) {
      this.showData = true;
    }
    else {
      this.showData = false;
    }
  }

 
  User ={
        userId:''
  }
  
  ngOnInit(){   
    this.userId =JSON.parse(localStorage.getItem('user')).id;
    // var user = JSON.parse(localStorage.getItem("user"));
    // this.userId=user.employeeId;
    this.getUserProfilePicture();
    this.getAllItem();
      }

  public signOut(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }
  getUserProfilePicture(){
    this.User.userId =this.userId ;
          this.profileService.getUserProfilepicture(this.User)
          .then(response=>{
            this.url =response as Url;
          }).catch(err=>{
            console.log(err);
          });
        }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }

  initForm(): FormGroup {
    return this.searchTopForm = this.fb.group({
      search: [null]
    })
  }
  
  toggledrop() {
    this.showDropDown = !this.showDropDown;
  }

  selectValue(value) {
    this.searchTopForm.patchValue({ "search": value });
    this.showDropDown = false;
  }
  getValue() {
    return this.searchTopForm.value.searchterm;
  }

    getAllItem() {
    console.log('in call get all item');
    this.bageService.getAllItem()
      .then(response => {
        for (var i = 0; i < response.ItemArray.length; i++) {

          this.value.push(response.ItemArray[i]);

        }
        console.log(this.value);


      }).catch(err => {


      });


  }
}

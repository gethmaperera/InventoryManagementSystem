
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator, EqualPasswordsValidator } from '../../theme/validators';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Component, OnInit } from '@angular/core';
import {ProfileService} from './profile.service';

class Url{

    success:boolean;

    status:string;

    message:string;

    photodata:string;



  }


@Component({
  selector:'profile',
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss'],
  providers:[ProfileService]
})
// tslint:disable-next-line:component-class-suffix
export class Profile  implements OnInit{
  profile:any;
  filesToUpload: Array<File> = [];
  userId:string ;
  constructor(private http:Http,private router:Router,private profileService:ProfileService ) {
    this.profile = JSON.parse(localStorage.getItem('Profile'));

    console.log(JSON.parse(localStorage.getItem('user')).id);
    // tslint:disable-next-line:no-console
    // console.log(this.profile);
  }
  ngOnInit(){
// this.profilePic.id = JSON.parse(localStorage.getItem('user'));
this.userId =JSON.parse(localStorage.getItem('user')).id;

this.getUserProfilePicture();
this. getregisterdetail();

  }
  registerdetail ={

    name:'',
    employeeid:'',
    email:'',
    address:'',
    userid:''


  }



  url:Url = {

        success:false,

        status: "",

        message:"",

        photodata:""

        }
       User={

          userId:''

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

      
               getregisterdetail(){
                 this.registerdetail.userid =JSON.parse(localStorage.getItem('user')).id
                this.profileService.getregisterdetail(this.registerdetail)
                .then(response=>{
                  console.log(response);
                  this.registerdetail.email =response.user.email;
                  this.registerdetail.employeeid =response.user.employeeId;
                  this.registerdetail.name =response.user.username;
                  this.registerdetail.address =response.user.address;

                  console.log('success get register detail');
                })
                .catch(err=>{
                  

                  console.log('err get register detail');
                });
              }         


              submitedit(){
                this.registerdetail.userid =JSON.parse(localStorage.getItem('user')).id
this.profileService.submiteditdetail(this.registerdetail)
.then(response=>{

  console.log('sucess submit');
  window.location.reload();
})
.catch(err=>{
  console.log('error sublmit');
});

              }
  uploadProfilePicture(){

    console.log('in the upload call');
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files);

    for(let i=0; i<files.length; i++){
        formData.append("uploads[]", files[i], files[i]['name']);
    }
    console.log(formData);
    console.log(this.userId);

    formData.append("userId",this.userId);


    this.http.post('http://localhost:3000/users/uploadpofilepicture',formData)
    .toPromise()
    .then((response)=>{
      // this.url =response.json();
      this.url =response.json() as Url ;
      console.log( this.url);


    }).catch((err)=>{

        console.log('err');

    });
  //   this.profileService.uploadProfilePicture(formData)
  //   .then(response=>{
  //     this.url =response as Url;
  //   console.log(this.url);
  //   }).catch(err=>{
  //     console.log(err);

  //   });

   }
  fileChangeEvent(fileInput: any) {

    this.filesToUpload = <Array<File>>fileInput.target.files;
console.log(this.filesToUpload);
  }

}

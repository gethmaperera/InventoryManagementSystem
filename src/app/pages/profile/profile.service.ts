import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { promise } from 'selenium-webdriver';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

class Url{

      success:boolean;

      status:string;

      message:string;

      photodata:string;



    }

@Injectable()
export class ProfileService{
  constructor(private http: Http,private router: Router) { }
    private webApi_get_profile_pic='http://localhost:3000/users/getProfilePicture';


    private headers = new Headers({'Content-Type' : 'application/json'});
    getUserProfilepicture(id):Promise<Url>{

          console.log();

         return this.http.post(this.webApi_get_profile_pic,id )
         .toPromise()
         .then(response=>{

          return response.json() as Url;



          }).catch(err=>{

              console.log('service '+err);

              return err;

          });

      }

      getregisterdetail(userid){

        return this.http.post('http://localhost:3000/users/getregisterdetail',userid)
        .toPromise()
        .then(respone=>{

            return respone.json();
        })
        .catch(err=>{


            console.log('err in service');
        });
      }


      submiteditdetail(user){

        return this.http.post('http://localhost:3000/users/submitedit',user)
        .toPromise()
        .then(resoponse=>{
            console.log('succes submit ');
            return resoponse.json();
          
        })
        .catch(err=>{

            console.log('error submit edit');
        });
      }
  }

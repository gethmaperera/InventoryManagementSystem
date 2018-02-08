import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ManagelongupdateService {

  longTermItem:any;
  constructor(private http:Http) { }

  setLupdate(longTermItem){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
   return this.http.post("http://localhost:3000/updateLong",longTermItem,{headers:headers}).map(response=>response.json());
  }

}

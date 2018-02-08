import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ManageshortdeletionService {

  shortTermItem:any;
  constructor(private http:Http) { }

  setSdeletion(shortTermItem){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
   return this.http.post("http://localhost:3000/deleteShort",shortTermItem,{headers:headers}).map(response=>response.json());
  }


}

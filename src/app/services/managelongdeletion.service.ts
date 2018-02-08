import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ManagelongdeletionService {

  longTermItem:any;
  constructor(private http:Http) { }

    setLdeletion(longTermItem){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
   return this.http.post("http://localhost:3000/deleteLong",longTermItem,{headers:headers}).map(response=>response.json());
  }

}

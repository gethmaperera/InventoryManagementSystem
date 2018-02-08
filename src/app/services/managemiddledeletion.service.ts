import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ManagemiddledeletionService {

  middleTermItem:any;
  constructor(private http:Http) { }

   setMdeletion(middleTermItem){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
   return this.http.post("http://localhost:3000/deleteMiddle",middleTermItem,{headers:headers}).map(response=>response.json());
  }


}

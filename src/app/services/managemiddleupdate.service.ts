import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ManagemiddleupdateService {

  middleTermItem:any;
  constructor(private http:Http) { }

   setMupdate(middleTermItem){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
   return this.http.post("http://localhost:3000/updateMiddle",middleTermItem,{headers:headers}).map(response=>response.json());
  }


}

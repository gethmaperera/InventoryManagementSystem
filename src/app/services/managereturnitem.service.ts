import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ManagereturnitemService {
  insertavailable:any;

  constructor(private http:Http) { }

  insertAvailable(insertAvailables){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
   return this.http.post('http://localhost:3000/itemavailable/insertavailability',
   insertAvailables,{headers:headers}).map(response=>response.json());
  }

}

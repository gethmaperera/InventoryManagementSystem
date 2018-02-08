import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ManagesupplierdetailService {

  supplierDetail:any;
  constructor(private http:Http) { }

  setSdetails(supplierDetail){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
   return this.http.post("http://localhost:3000/suppliers/setsupplier",supplierDetail,{headers:headers}).map(response=>response.json());
  }

}

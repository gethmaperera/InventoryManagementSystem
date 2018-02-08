import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ManagesupplierdetaildeletionService {

  supplierDetail:any;
  constructor(private http:Http) { }

  setSdetailsdeletion(supplierDetail){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
   return this.http.post("http://localhost:3000/suppliers/deletesupplier",supplierDetail,{headers:headers}).map(response=>response.json());
  }


}

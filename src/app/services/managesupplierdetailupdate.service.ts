import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ManagesupplierdetailupdateService {

  supplierDetail:any;
  constructor(private http:Http) { }

  setSdetailsupdate(supplierDetail){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
   return this.http.put("http://localhost:3000/suppliers/updatesupplier/:id",supplierDetail,{headers:headers}).map(response=>response.json());
  }


}

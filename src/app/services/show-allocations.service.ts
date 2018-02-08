import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ShowAllocationsService {

  constructor(private http: Http) { }
  getAllocatedItems() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/itemavailable/showallocateditems')
        .map(response => response.json())
        .subscribe(response => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }

}

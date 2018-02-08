import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ShowavailableService {

  constructor(private http: Http) { }

  getAllavailableItems() {
    return new Promise((resolve, reject) => {
     // this.http.get('http://localhost:3000/itemavailable/available')
     this.http.get('http://localhost:3000/itemavailable/available')
        .map(response => response.json())
        .subscribe(response => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }

}

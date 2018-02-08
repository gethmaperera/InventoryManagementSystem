import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ShowmoreavailablesService {

  constructor(private http: Http) { }

  getMoreavailableItems() {
    return new Promise((resolve, reject) => {
     // this.http.get('http://localhost:3000/itemavailable/availableMore')
     this.http.get('http://localhost:3000/itemavailable/availableMore')
        .map(response => response.json())
        .subscribe(response => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }

}

import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ViewRequestReportService {

  constructor(private http: Http) { }

  getnewrequest() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/viewRequest/newRequest')
        .map(response => response.json())
        .subscribe(response => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }
  getexrequest() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/viewRequest/exRequest')
        .map(response => response.json())
        .subscribe(response => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }
  getviewreports() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/viewRequest/viewreport')
        .map(response => response.json())
        .subscribe(response => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }

}

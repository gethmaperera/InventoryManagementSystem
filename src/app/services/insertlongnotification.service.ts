import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InsertlongnotificationService {
   longTermNotification:any;

  constructor(private http:Http) { }

 setLnotification(longTermNotification){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
   return this.http.post('setlongnotification',
   longTermNotification,{headers:headers}).map(response=>response.json());
  }

}

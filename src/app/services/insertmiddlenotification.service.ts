import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InsertmiddlenotificationService {
  middleTermNotification:any;

  constructor(private http:Http) { }
 setMnotification(middleTermNotification){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
   return this.http.post('http://localhost:3000/middleTermNotification/setmiddlenotification',
   middleTermNotification,{headers:headers}).map(response=>response.json())

  }
}

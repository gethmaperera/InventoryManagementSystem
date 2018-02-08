import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BaMsgCenterService {

   constructor( private http: Http) { }

   getNotifications(user) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/middleTermNotification/notify', user, {headers: headers})
      .map(res => res.json());
  }

  deleteNotificationById(id) {
    let searchUrl = "http://localhost:3000/middleTermNotification/" + id;
    console.log(id);
    return this.http.delete(searchUrl).map(res => res.json());
  }

  
}

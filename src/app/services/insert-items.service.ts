import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InsertItemsService {
  shortTermItem: any;
  middleTermItem: any;
  longTermItem: any;

  constructor(private http:Http) { }

  insertShortTermItem(shortTermItem){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/itemInsert/shortTermInsert', shortTermItem,{headers: headers})
      .map(res => res.json());
  }

  insertMiddleTermItem(middleTermItem){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/itemInsert/middleTermInsert', middleTermItem,{headers: headers})
      .map(res => res.json());
  }
  
  insertMiddleTermItemToAvailable(middleTermItem){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/itemavailable/availableItemInsert', middleTermItem,{headers: headers})
      .map(res => res.json());
  }


  insertLongTermItem(longTermItem){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/itemInsert/longTermInsert', longTermItem,{headers: headers})
      .map(res => res.json());
  }

  getMiddleTermItem() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/itemInsert/showMiddleTermItems')
        .map(response => response.json())
        .subscribe(response => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }


  checkMiddleTermItemAvailability(item){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`http://localhost:3000/itemInsert/checkMiddleTermInsert`, item,{headers: headers})
      .map(res => res.json());
  }

  checkLongTermItemAvailability(item){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`http://localhost:3000/itemInsert/checkLongTermInsert`, item,{headers: headers})
      .map(res => res.json());
  }

}

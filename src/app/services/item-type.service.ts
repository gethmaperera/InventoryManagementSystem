import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemTypeService {
 itemType:any;
  constructor(private http:Http) { }
  private _List = [
    
  ];

 
    insertType(itemType){
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:3000/itemType', itemType,{headers: headers})
        .map(res => res.json());
    }

    
    showTypes() {
      return new Promise((resolve, reject) => {
        this.http.get('hhttp://localhost:3000/itemType')
          .map(response => response.json())
          .subscribe(response => {
            resolve(response);
          }, (err) => {
            reject(err);
          });
      });
    }
}

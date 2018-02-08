import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ItemviewService {
  
  constructor(
    private http:Http
  ) { }

 

  getItemsData(itemId){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    const body={"itemId":itemId};
    console.log(body);
    return this.http.post("http://localhost:3000/itemAllocation/itemview",body,{headers:headers}).map(res=>res.json());
    
  }
  
  
  
}


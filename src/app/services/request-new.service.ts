import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class RequestNewService {
  requestnew:any;
  constructor(
    private http:Http
  ) {     }
  requestnewdata(requestnew){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post("http://localhost:3000/requestNewItem",requestnew,{headers:headers}).map(res=>res.json());
    
    
  }
  
}



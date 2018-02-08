import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class RequestExistingService {
 requestexisting:any;
  constructor(
    private http:Http
  ) {     }
  requestexistingdata(requestexisting){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post("http://localhost:3000/requestExistingItem",requestexisting,{headers:headers}).map(res=>res.json());
        
  }

  getItemData(itemName:String){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    const body={"itemName":itemName};
    console.log(body);
    return this.http.post("http://localhost:3000/requestExistingItem/showRequestExistingItem",body,{headers:headers}).map(res=>res.json());
  }
  
  getEmployeeData(employeeId:any){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    const ebody={"employeeId":employeeId};
    console.log(ebody);
    return this.http.post("http://localhost:3000/users/getuserinfo",ebody,{headers:headers}).map(res=>res.json());
  }
}



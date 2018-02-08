import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ItemAllocationService {
  itemallocation:any;
  
  constructor(
    private http:Http
  ) { }

  itemallocationdata(itemallocation){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post("http://localhost:3000/itemavailable/insertallocation",itemallocation,{headers:headers}).map(res=>res.json());
  }
  getEmployeeData(employeeId:any){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    const ebody={"employeeId":employeeId};
    console.log(ebody);
    return this.http.post("http://localhost:3000/users/getuserinfo",ebody,{headers:headers}).map(res=>res.json());
  }

  getItemData(itemId:String){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    const body={"itemId":itemId};
    console.log(body);
    return this.http.post("http://localhost:3000/itemAllocation/availableiteminfo",body,{headers:headers}).map(res=>res.json());
  }
  
  
}



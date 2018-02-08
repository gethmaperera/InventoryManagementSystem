import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ReportItemService { 
 reportitem:any;
  constructor(
    private http:Http
  ) {     }
  reportitemdata(reportitem){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post("http://localhost:3000/reportItem",reportitem,{headers:headers}).map(res=>res.json());
  }

  getItemData(itemId:String){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    const body={"itemId":itemId};
    console.log(body);
    return this.http.post("http://localhost:3000/reportItem/showReportItem",body,{headers:headers}).map(res=>res.json());
  }

}



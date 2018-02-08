import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import {BaThemeConfigProvider, colorHelper} from '../theme';

@Injectable()
export class ReportsService {
 requestexisting:any;
 dashboardColors;

  constructor(private _baConfig:BaThemeConfigProvider,private http:Http) {
    this.dashboardColors = this._baConfig.get().colors.dashboard;
    }


  // getAllItem() {


  //   let chartData:any=[];
  //   this.http.get('http://localhost:3000/reports/getMiddleTermItem').map(res=>res.json()).subscribe(data=>{

  //     let itemList =data.item;
  //     for(let a=0;a<itemList.length;a++){
  //          let row = itemList.length[a];
  //          let qty=50;//row.qtty
  //          let name="Name";

  //       let item = {
  //         value: qty,
  //         color: this.dashboardColors.blueStone,
  //         highlight: colorHelper.shade(this.dashboardColors.blueStone, 15),
  //         label: name

  //       }
  //       chartData.push(item);
  //     }

  //   });

  //   return chartData;
  // }



  getDefectItemCount() {
    return this.http.get('http://localhost:3000/reports/getDefectItemCount').map(res=>res.json());
  }

  getAllItemCount() {
    return this.http.get('http://localhost:3000/reports/getAllItemCount').map(res=>res.json());
  }

}
 


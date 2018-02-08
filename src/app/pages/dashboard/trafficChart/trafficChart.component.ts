import {Component,OnInit} from '@angular/core';
import { Http} from '@angular/http';
//import {TrafficChartService} from './trafficChart.service';
import * as Chart from 'chart.js';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';
import { ReportsService} from '../../../services/reports.service';

@Component({
  selector: 'traffic-chart',
  templateUrl: './trafficChart.html',
  styleUrls: ['./trafficChart.scss']
})

// TODO: move chart.js to it's own component
export class TrafficChart implements OnInit{
  dashboardColors;
  public doughnutData: Array<Object>;

  constructor(private _baConfig:BaThemeConfigProvider,private http:Http,private reportsService:ReportsService) {
    this.dashboardColors = this._baConfig.get().colors.dashboard;
    //this.doughnutData = trafficChartService.getData();
  }

  ngOnInit(){
    let chartData:any=[];
    let colors=["#ABD9F9","#5481EA","#1353C4","#1741E9"];
    //console.log("dfsdfdsfdsfdsfsdfsdfsdfdsfsdf");
    this.reportsService.getDefectItemCount().subscribe(data=>{
      this.doughnutData=[];
      let itemList =data.item;

      for(let a=0;a<itemList.length;a++){
        //var val=


        let item = {
          value: itemList[a].count,
          color: colors[a],
          highlight: colorHelper.shade(this.dashboardColors.blueStone, 15),
          label: itemList[a]._id

        }
        chartData.push(item);

      }

      //console.log(chartData);
      this.doughnutData=chartData;
      this._loadDoughnutCharts();
    });
  }

  ngAfterViewInit() {
    this._loadDoughnutCharts();
  }

  private _loadDoughnutCharts() {
    let el = jQuery('.chart-area').get(0) as HTMLCanvasElement;
    new Chart(el.getContext('2d')).Doughnut(this.doughnutData, {
      segmentShowStroke: false,
      percentageInnerCutout : 64,
      responsive: true
    });
  }
}

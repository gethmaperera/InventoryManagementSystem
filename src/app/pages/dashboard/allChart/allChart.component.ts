import {Component,OnInit} from '@angular/core';
import { Http} from '@angular/http';
//import {TrafficChartService} from './trafficChart.service';
import * as Chart from 'chart.js';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';
import { ReportsService} from '../../../services/reports.service';

@Component({
  selector: 'all-chart',
  templateUrl: './allChart.html',
  styleUrls: ['./allChart.scss']
})

// TODO: move chart.js to it's own component
export class AllChart implements OnInit{
  dashboardColors;
  public doughnutData: Array<Object>;

  constructor(private _baConfig:BaThemeConfigProvider,private http:Http,private reportsService:ReportsService) {
    this.dashboardColors = this._baConfig.get().colors.dashboard;
    //this.doughnutData = trafficChartService.getData();
  }

  ngOnInit(){
    let chartData:any=[];
    let colors=["#8e5ea2","#3cba9f","#e8c3b9"];

    this.reportsService.getAllItemCount().subscribe(data=>{
      this.doughnutData=[];
      let itemList =data.item;
      console.log("fffffff");
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

      console.log(chartData);
      this.doughnutData=chartData;
      this._loadDoughnutCharts();
    });
  }

  ngAfterViewInit() {
    this._loadDoughnutCharts();
  }

  private _loadDoughnutCharts() {
    let el = jQuery('.chart-area2').get(0) as HTMLCanvasElement;
    new Chart(el.getContext('2d')).Doughnut(this.doughnutData, {
      segmentShowStroke: false,
      percentageInnerCutout : 64,
      responsive: true
    });
  }
}

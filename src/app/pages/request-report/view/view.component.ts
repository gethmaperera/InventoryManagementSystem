import { Component, OnInit } from '@angular/core';
import { ViewRequestReportService } from '../../../services/viewreportrequest.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html'
})
export class ViewComponent implements OnInit {
  newrequests:any;
  exrequests:any;
  reports:any;
  constructor(private ViewRequestReportService:ViewRequestReportService ) { }

  ngOnInit() {
    this.ViewRequestReportService.getnewrequest().then((response) => {
  		this.newrequests = 	response;
  		console.log(this.newrequests);
  	}, (err)=>{
       console.log(err);
    });
    this.ViewRequestReportService.getexrequest().then((response) => {
  		this.exrequests = 	response;
  		console.log(this.exrequests);
  	}, (err)=>{
       console.log(err);
    });
    this.ViewRequestReportService.getviewreports().then((response) => {
  		this.reports = 	response;
  		console.log(this.reports);
  	}, (err)=>{
       console.log(err);
    });
  }

}

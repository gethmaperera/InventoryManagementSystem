import { Component, OnInit } from '@angular/core';
import { ShowmoreavailablesService } from '../../../services/showmoreavailables.service';

@Component({
  selector: 'app-view-last-allocation',
  templateUrl: './view-last-allocation.component.html',
  styleUrls: ['./view-last-allocation.component.scss']
})
export class ViewLastAllocationComponent implements OnInit {
  availablesmoredetails:any;
  constructor(private showmoreavailablesService: ShowmoreavailablesService) { }

  ngOnInit() {
    this.showmoreavailablesService.getMoreavailableItems().then((response) => {
  		this.availablesmoredetails = 	response;
  		console.log(this.availablesmoredetails);
  	}, (err)=>{
       console.log(err);
    });
  }

}

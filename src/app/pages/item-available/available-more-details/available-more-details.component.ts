import { Component, OnInit } from '@angular/core';
import { ShowmoreavailablesService } from '../../../services/showmoreavailables.service';

@Component({
  selector: 'app-available-more-details',
  templateUrl: './available-more-details.component.html',
  styleUrls: ['./available-more-details.component.scss']
})
export class AvailableMoreDetailsComponent implements OnInit {
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

import { Component, OnInit } from '@angular/core';
import { ShowavailableService } from '../../../services/showavailable.service';


@Component({
  selector: 'app-available',
  templateUrl: './available.component.html',
  styleUrls: ['./available.component.scss']
})
export class AvailableComponent implements OnInit {
  availables:any;

  constructor(private showavailableService: ShowavailableService) { }

  ngOnInit() {
    this.showavailableService.getAllavailableItems().then((response) => {
  		this.	availables = 	response;
  		console.log(this.	availables);
  	}, (err)=>{
       console.log(err);
    });
  }
 

}

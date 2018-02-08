import { Component, OnInit } from '@angular/core';
import { ShowAllocationsService } from '../../../services/show-allocations.service';

@Component({
  selector: 'app-allocated',
  templateUrl: './allocated.component.html',
  styleUrls: ['./allocated.component.scss']
})
export class AllocatedComponent implements OnInit {
  allocations: any;

  constructor(private showAllocationsService: ShowAllocationsService) { }

  ngOnInit() {
    this.showAllocationsService.getAllocatedItems().then((response) => {
      this.allocations = response;
      console.log(this.allocations);
    }, (err) => {
      console.log(err);
    });
  }

}

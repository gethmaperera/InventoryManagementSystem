import { NgModule, Component, Pipe, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ReportItemService } from '../../../services/report-item.service'
import { Item } from '../../../models';
import swal from 'sweetalert2';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html'
})

export class ReportComponent implements OnInit {

  public itemArray: Array<Item>;
  data: any;
  itemId: String;
  itemName: String;
  itemType:String;
  reportDescription: String;
  reporteduser: String;
  it:String;

  constructor(public reportservice: ReportItemService) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.reporteduser=user.employeeId;
  }
  

  savereportdata() {
    const reportitem = {
      itemId: this.itemId,
      itemName: this.itemArray[0].itemName,
      itemType: this.itemArray[0].itemType,
      reportDescription: this.reportDescription,
      reporteduser:this.reporteduser
    };

    if(reportitem.itemId){
      console.log(reportitem);
    this.reportservice.reportitemdata(reportitem).subscribe(res => {
      console.log(res);
    });
    swal(
      'Successfully Reported',
      'Your compaint has been reported'
          )

  }else{
    swal(
      'Unsuccessfully Reported',
      'Please Try Again with Valid Data'
     )
  }
  }

  getItem() {
    this.reportservice.getItemData(this.itemId).subscribe(data => {
      this.itemArray = []
      if(data.length > 0){
        data.forEach(element => {
          this.itemArray.push(element)
        });
      } 
      console.log(this.itemArray)
      
  
    })

  }

  

}

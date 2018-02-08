import { Component, OnInit } from '@angular/core';
import { UsersDetailsService } from '../../../../services/users-details.service';
import { Router } from '@angular/router';
import { ValidateService } from '../../../../services/validate.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-reset-accounts',
  templateUrl: './reset-accounts.component.html',
  styleUrls: ['./reset-accounts.component.scss']
})
export class ResetAccountsComponent implements OnInit {
  currentRole:string;
  id:string;
  employeeId:string;
  username:string;
  newPassword:string;
  User:any;
 
  constructor(private UsersDetailsService:UsersDetailsService,
    private router: Router,
    private validateService: ValidateService) { }

  ngOnInit() {
    this.UsersDetailsService.getUsersDetails().then((response) => {
      this.User = response;
      console.log(this.User);
    }, (err)=>{
      console.log(err);
    });
         
     var currentUser = JSON.parse(localStorage.getItem('user'));
     this.currentRole = currentUser.userRole;
  }

  resetAccount(){
    const selectedUser = {
      employeeId: this.employeeId,
    }
  

    // Check Availability of User
  this.UsersDetailsService.checkUserAvailabilityByID(selectedUser).subscribe(data => {
    if (data.status) {
      this.UsersDetailsService.resetPassword(this.employeeId,this.newPassword).subscribe(data => {
        if(data){
          swal(
            'Done',
            'Reset successfully..!',
            'success'
          )
          this.router.navigate(['/pages/forms/resetAccount']);
        }else{
          swal(
            'Oops...',
            'Reset failed!',
            'error'
          )
          this.router.navigate(['/pages/forms/resetAccount']);
        }
      })
      
    } else {
      console.log("User not found, You can Register");
      swal(
        'Oops...',
        'Reset failed, User Not Found!',
        'error'
      )
      this.router.navigate(['/pages/forms/resetAccount']);
    }
  });

   
  }

  
}

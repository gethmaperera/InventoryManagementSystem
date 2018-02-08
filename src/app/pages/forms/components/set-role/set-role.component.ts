import { Component, OnInit } from '@angular/core';
import { UsersDetailsService } from '../../../../services/users-details.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-role',
  templateUrl: './set-role.component.html',
  styleUrls: ['./set-role.component.scss']
})
export class SetRoleComponent implements OnInit {
  currentRole:string;
  id:string;
  employeeId:string;
  username:string;
  newRole:string;
  User:any;

  constructor(private UsersDetailsService:UsersDetailsService,
    private router: Router,) { }

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

  setRole(){
    this.UsersDetailsService.setUserRole(this.employeeId,this.newRole).subscribe(data => {
      if(data.success){
        console.log("userRole set success..!");
      }else{
        console.log("error");
        this.router.navigate(['/pages/forms/setRole']);
      }
    })
  }

  
}

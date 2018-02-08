import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator, EqualPasswordsValidator } from '../../theme/validators';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ValidateService } from '../../services/validate.service';
import { UsersDetailsService } from '../../services/users-details.service';

@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class Register {

  public employeeId: string;
  public username: string;
  public email: string;
  public password: string;
  public userRole: string;


  constructor(
    private authService: AuthService,
    private validateService: ValidateService,
    private router: Router,
    private usersDetailsService: UsersDetailsService,
  ) { }

  onRegisterSubmit() {
    const user = {
      employeeId: this.employeeId,
      username: this.username,
      email: this.email,
      password: this.password,
      userRole: "employee"

    }
    const userCheck = {
      email: this.email
    }

    // Required Fields
    if (!this.validateService.validateRegister(user)) {
      this.password = "";
      this.email = "";
      return false;
    }

    // Required Fields
    if (!this.validateService.validateEmail(user.email)) {
      this.email = "";
      this.password = "";
      return false;
    }

    // // Check Availability of User
    // this.usersDetailsService.checkUserAvailability(this.email).subscribe(data => {
    //   if (!data) {
    //     console.log(data);
    //     console.log("user is already registered");
    //     this.email = "";
    //     this.password = "";
    //   } else {
    //     console.log("User not found, You can Register");
        
    //   }
    // });


    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/register']);
      }
    });

  }

}

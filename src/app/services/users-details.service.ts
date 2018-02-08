import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersDetailsService {

  constructor(private http: Http) { }
  getUsersDetails() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/users/getUsers')
        .map(response => response.json())
        .subscribe(response => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }

  setUserRole(employeeId, userRole) {
    let headers = new Headers();
    let body = 
      {
         "userRole": userRole
      }
    headers.append('Content-Type', 'application/json');
    return this.http.put(`http://localhost:3000/users/setRole/` + employeeId, body)
      .map(res => res.json());

  }

  resetPassword(employeeId, newPassword) {
    let headers = new Headers();
    let body = 
      {
         "password": newPassword
      }
    headers.append('Content-Type', 'application/json');
    return this.http.put(`http://localhost:3000/users/resetAccount/` + employeeId, body)
      .map(res => res.json());

  }

  checkUserAvailability(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`http://localhost:3000/users/checkUsers`, user,{headers: headers})
      .map(res => res.json());
  }
  
  checkUserAvailabilityByID(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`http://localhost:3000/users/checkUsersByEmpID`, user,{headers: headers})
      .map(res => res.json());
  }
}    

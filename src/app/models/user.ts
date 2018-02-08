export class User {
    employeeId:String;
email:String;
username:String;
password:String;
userRole:String;
profilePictureUrl:String;
   
    
    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}
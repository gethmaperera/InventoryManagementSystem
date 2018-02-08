import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if (user.employeeId == undefined || user.username == undefined || user.email == undefined || user.password == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateLogin(user) {
    if ((user.email == undefined) || (user.password == undefined)) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validatePassword(user) {
    if (user.password == user.confirmPassword) {
      return true;
    } else {
      return false;
    }
  }

  validateShortItem(shortTermItem) {
    if (shortTermItem.itemName == undefined || shortTermItem.itemType == undefined || shortTermItem.itemQuantity == undefined || shortTermItem.itemWarehouse == undefined) {
      return false;
    } else {
      return true;
    } 
  }

  validateMiddleItem(middleTermItem) {
    if (middleTermItem.itemName == undefined || middleTermItem.itemType == undefined || middleTermItem.itemBrand == undefined || middleTermItem.invoiceNumber == undefined || middleTermItem.warrantyQuantity == undefined || middleTermItem.referenceId == undefined || middleTermItem.itemWarehouse == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateLongtItem(longTermItem) {
    if (longTermItem.itemName == undefined || longTermItem.itemType == undefined || longTermItem.itemQuantity == undefined || longTermItem.itemWarehouse == undefined) {
      return false;
    } else {
      return true;
    }
  }
}

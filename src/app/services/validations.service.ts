import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  errorMessages = {
    emptyField: 'Please field cannot be empty',
    wrongUsername: 'Please username is incorrect',
    wrongPassword: 'Please password is incorrect'
  };

  constructor() { }

  emptyTextField(control: AbstractControl): {[key: string]: boolean} | null {
      if (control.value === '') {
        return {emptyField: true};
      }
      return null;
  }

   wrongUsername(control: AbstractControl): {[key: string]: boolean} | null {
    if (control.value === '') {
      return {wrongUsername: true};
    }
    return null;
  }

  wrongPassword(control: AbstractControl): {[key: string]: boolean} | null {
    if (control.value === '') {
      return {wrongPassword: true};
    }
    return null;
  }


  setErrorMessage(control: AbstractControl): any {
     if ((control.pristine || control.dirty || control.touched) && control.errors) {
      return Object.keys(control.errors).map( key => this.errorMessages[key]);
     }
  }
}

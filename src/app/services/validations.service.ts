import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  errorMessages = {
    emptyField: 'Field is required',
    onlyStringField: 'Field must contain only letters',
    onlyNumbersField: 'Field must contain only numbers',
    contactLength: 'Contact must be 10 digits',
    emailField: 'Email must be in the correct format eg. a@a.com',
    wrongUsername: 'Please username is incorrect',
    wrongPassword: 'Please password is incorrect'
  };

  constructor() { }

  emptyTextField(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value === '') {
      return { emptyField: true };
    }
    return null;
  }

  onlyStringsField(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== '') {
      if (!isNaN(control.value)) {
        return { onlyStringField: true };
      }
      return null;
    }
  }

  onlyNumbersField(control: AbstractControl): { [key: string]: boolean } | null {
    if (isNaN(control.value)) {
      return { onlyNumbersField: true };
    }
    return null;
  }

  emailField(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== '') {
      if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(control.value))) {
        return { emailField: true };
      }
      return null;
    }

  }

  contactField(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value) {
      if (( control.value.length > 10 || control.value.length < 10)) {
        return { contactLength: true };
      } else {
        return null;
      }
    }
  }

// Setting Message to display to user
  setErrorMessage(control: AbstractControl): any {
    if ((control.dirty || control.touched) && control.errors) {
      return Object.keys(control.errors).map(key => this.errorMessages[key]);
    }
  }
}

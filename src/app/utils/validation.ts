import { AbstractControl, ValidatorFn } from '@angular/forms';


const regexPhoneNumer: RegExp = /^\d{10}$/;
const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const email: string = 'john@gmail.com';
const result: boolean = expression.test(email); // true

export default class Validation {
  static match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);

      if (checkControl?.errors && !checkControl.errors['matching']) {
        return null;
      }

      if (control?.value !== checkControl?.value) {
        controls.get(checkControlName)?.setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }

  static phoneNumber(): ValidatorFn {
    return (control: AbstractControl) => { 
       var isValid = regexPhoneNumer.test(control.value) ? true : false;
        if (control.value !== undefined && (isNaN(control.value) || !isValid)) {
            return { 'phoneNumberError': true };
        }
        return  null;
    }
  }
  static example(): ValidatorFn {
    return (control: AbstractControl) => {
        if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45)) {
            return { 'ageRange': true };
        }
        return null;
    }
  }
}
// Check "Event Start Date" edited value for errors - is date format valid , is date exist, is time correct (0-23:00-59)

import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { dateConvertor } from '../common/dateConvertor'

@Directive({
  selector: '[appIsDateCorrect]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: IsDateCorrectDirective,
      multi: true
    }
  ]
})
export class IsDateCorrectDirective implements Validator {

  pattern: RegExp = /^\d{2}\/\d{2}\/\d{4}\s([0-1]\d|2[0-3]):[0-5]\d$/;

  constructor() { }
  validate(control: AbstractControl): ValidationErrors {

    if( this.pattern.test(control.value) ) {

    const [date, ] = control.value.split(' ');
    const [, month, ] = date.split('/');    
     
     
    return  new Date(dateConvertor(date)).getMonth() + 1 === +month ? null : {inexistantDate: true};
    } else return {incorrectDateFormat: true}
  }

}

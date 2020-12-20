// Check odds values for errors before sending to DB - is odds < 1 , is there sure bet possibility

import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appIsOddsCorrect][ngModelGroup]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: IsOddsCorrectDirective,
      multi: true
    }
  ]
})
export class IsOddsCorrectDirective implements Validator {
  margin: number;
  
  constructor() { }
  validate(control: AbstractControl): ValidationErrors {  
    if(control.value.homeWin && control.value.draw && control.value.awayWin){  
      if (!(control.value.homeWin >=1) || !(control.value.draw >=1) || !(control.value.awayWin >=1) ) {
        return {wrongOdd: true};
      }
      this.margin = 1/control.value.homeWin + 1/control.value.draw + 1/control.value.awayWin;
      return this.margin >= 1 ? null : {sureBet: true};
    } 
    if(!control.value.homeWin && !control.value.draw && !control.value.awayWin) {
      return null;
    } return {missingOdd: true};
  }

}

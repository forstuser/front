import { Injectable } from '@angular/core';

@Injectable()
export class FunctionService {
  constructor() { }
    // function for avoid only space submit
    public NoWhitespaceValidator(formName:any,inputName:any) {
      console.log(formName,inputName);
      const isWhitespace = (formName.controls[inputName].value || '').trim().length === 0;
      const isValid = !isWhitespace;
      console.log(isValid);
      if(!isValid){
        formName.controls[inputName].setValue('');
      }
      return isValid ? null : { 'whitespace': true }
  }
}

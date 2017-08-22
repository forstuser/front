import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  resultArray: Array<{}> = [];
  constructor() { }
  getData(d){
    console.log(d);
    this.resultArray.push(d);
    console.log(this.resultArray);
  }
}

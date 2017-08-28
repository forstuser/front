import { FunctionService } from './../../../../_services/function.service';
import { OnlineSeller } from './../../../../_models/onlineSeller.interface';
import { UserService } from './../../../../_services/user.service';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-online-seller',
  templateUrl: './add-online-seller.component.html',
  styleUrls: ['./add-online-seller.component.css']
})
export class AddOnlineSellerComponent implements OnInit {
  public onlineSellerForm: FormGroup;
  items: OnlineSeller [] = [];

  constructor(private userService: UserService, private fb: FormBuilder, private functionService:FunctionService) {
   }
  ngOnInit() {
    this.onlineSellerForm = this.fb.group({
      'Name' : ['', Validators.required],
      'URL' : '',
      'GstinNo': '',
       Details: this.fb.array([ this.createItem(), ])
    });
  }
  createItem() {
    return this.fb.group({
      'DetailTypeID': '',
      'DisplayName': '',
      'Details': '',
    });
  }
  addItem() {
    const control = <FormArray>this.onlineSellerForm.controls['Details'];
    control.push(this.createItem());
  }
  removeDetails(i: number) {
    const control = <FormArray>this.onlineSellerForm.controls['Details'];
    control.removeAt(i);
  }
  //  create online seller function
  createOnlineSeller(data: OnlineSeller) {
    console.log(data);
    this.userService.createOnlineSeller(data)
      .subscribe(res => {
        console.log(res);
        alert('New Online Seller added succesfully');
        this.onlineSellerForm.reset();
      });
  }
  // function for avoid only space submit
  avoidSpace(){
    this.functionService.NoWhitespaceValidator(this.onlineSellerForm,'Name')
  }
}

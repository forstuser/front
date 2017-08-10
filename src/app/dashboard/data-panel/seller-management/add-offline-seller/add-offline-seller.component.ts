import { OfflineSeller } from './../../../../_models/offlineSeller.interface';
import { UserService } from './../../../../_services/user.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-offline-seller',
  templateUrl: './add-offline-seller.component.html',
  styleUrls: ['./add-offline-seller.component.css']
})
export class AddOfflineSellerComponent implements OnInit {
  public offlineSellerForm: FormGroup;
  items: OfflineSeller [] = [];

  constructor(private userService: UserService, private fb: FormBuilder) {
   }
  ngOnInit() {
    this.offlineSellerForm = this.fb.group({
      'Name' : [null, Validators.required],
      'Description' : [null],
       Details: this.fb.array([ this.createItem(), ])
    });
  }
  createItem() {
    return this.fb.group({
      'DetailTypeID': [null],
      'DisplayName': [null],
      'Details': [null]
    });
  }
  addItem() {
    const control = <FormArray>this.offlineSellerForm.controls['Details'];
    control.push(this.createItem());
  }
  removeDetails(i: number) {
    const control = <FormArray>this.offlineSellerForm.controls['Details'];
    control.removeAt(i);
  }
  createOfflineSeller(data: OfflineSeller) {
    this.userService.createBrand(data)
      .subscribe(res => {
        console.log(res);
        alert('New Brand added succesfully');
        this.offlineSellerForm.reset();
      });
  }
}

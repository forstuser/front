import { Brand } from './../../../../_models/brand';
import { UserService } from './../../../../_services/user.service';
import { OfflineSeller } from './../../../../_models/offlineSeller.interface';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-service-center',
  templateUrl: './add-service-center.component.html',
  styleUrls: ['./add-service-center.component.css']
})
export class AddServiceCenterComponent implements OnInit {
  public offlineSellerForm: FormGroup;
  items: OfflineSeller [] = [];
  brands: Brand [] = [];
  constructor(private userService: UserService, private fb: FormBuilder) {
   }
  ngOnInit() {
    this.userService.getBrandList()
      .subscribe( brandList => {
        this.brands = brandList;
        console.log(this.brands);
      });

    this.offlineSellerForm = this.fb.group({
      'Name' : [null, Validators.required],
      'BrandID' : [null, Validators.required],
      'HouseNo' : [null],
      'Block': [null],
      'Street': [null],
      'Sector': [null],
      'City': [null, Validators.required],
      'State': [null, Validators.required],
      'PinCode': [null],
      'NearBy': [null],
      'Lattitude': [null],
      'Longitude': [null],
      'OpenDays': [null, Validators.required],
      'Timings': [null, Validators.required],
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
    this.userService.createAuthorizedServiceCenter(data)
      .subscribe(res => {
        console.log(res);
        alert('New Service center added succesfully');
        this.offlineSellerForm.reset();
      });
  }
}

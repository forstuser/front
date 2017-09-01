import { Category } from './../../../../_models/category';
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
  items: OfflineSeller;
  brands: Brand;
  cat:Category;
  constructor(private userService: UserService, private fb: FormBuilder) {
   }
  ngOnInit() {
      // get list of category
      this.userService.getCategoryList(2) // 2 for category refer to api doc
      .subscribe(getCat => {
        this.cat = getCat;
        console.log('category is ' + getCat);
      });
    this.userService.getBrandList()
      .subscribe( brandList => {
        this.brands = brandList;
        console.log(this.brands);
      });

    this.offlineSellerForm = this.fb.group({
      'Name' : ['', Validators.required],
      'BrandID' : ['', Validators.required],
      'HouseNo' : '',
      'Block': '',
      'Street': '',
      'Sector': '',
      'City': ['', Validators.required],
      'State': ['', Validators.required],
      'PinCode': '',
      'NearBy': '',
      'Lattitude': '',
      'Longitude': '',
      'OpenDays': ['', Validators.required],
      'Timings': ['', Validators.required],
      Details: this.fb.array([ this.createItem(), ])
    });
  }
  createItem() {
    return this.fb.group({
      'CategoryID':'',
      'DetailTypeID': '',
      'DisplayName': '',
      'Details': ''
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

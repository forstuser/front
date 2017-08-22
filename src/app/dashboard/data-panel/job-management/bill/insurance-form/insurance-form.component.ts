import { DataService } from './../../../../../_services/data.service';
import { Inclusion } from './../../../../../_models/inclusion';
import { Exclusion } from './../../../../../_models/exclusion';
import { Brand } from './../../../../../_models/brand.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../../../../_services/user.service';
import { FormGroup, FormBuilder, Validators, FormArray, NgForm } from '@angular/forms';
import { OfflineSeller } from './../../../../../_models/offlineSeller.interface';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-insurance-form',
  templateUrl: './insurance-form.component.html',
  styleUrls: ['./insurance-form.component.css']
})
export class InsuranceFormComponent implements OnInit {
  offlineSeller: OfflineSeller;
  offlineSellerList: OfflineSeller;
  sellerList: Object;
  sellerFormType: String;
  public offlineSellerForm: FormGroup;
  productFormID: number;
  BrandList: Brand;
  selectDropdown: String = null;
  exclusionList: Exclusion;
  inclusionList: Inclusion;
  brandList: Brand;
  // items: OfflineSeller [] = [];
  // items: OnlineSeller [] = [];
  constructor(private _location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private userservice: UserService,
    private fb: FormBuilder,
    private dataservice: DataService) {
    this.productFormID = route.snapshot.queryParams['ID'];
    console.log(this.productFormID);
  }

  ngOnInit() {

    // create offline seller form
    this.offlineSellerForm = this.fb.group({
      'Name': [null, Validators.required],
      'OwnerName': '',
      'GstinNo': '',
      'PanNo': '',
      'RegNo': '',
      'ServiceProvider': '',
      'Onboarded': '',
      'HouseNo': '',
      'Block': '',
      'Street': '',
      'Sector': '',
      'City': [null, Validators.required],
      'State': [null, Validators.required],
      'PinCode': '',
      'NearBy': '',
      'Lattitude': '',
      'Longitude': '',
      Details: this.fb.array([this.createItemOffline(),])
    });
    // get exclusion list by catid
    this.userservice.getExclusionsListbyCategoryID(this.productFormID)
      .subscribe(res => {
        // console.log(res);
        this.exclusionList = res;
      })
    // get inclusion list by catid
    this.userservice.getInclusionsListbyCategoryID(this.productFormID)
      .subscribe(res => {
        // console.log(res);
        this.inclusionList = res;
      })
    // get brand list
    this.userservice.getBrandList()
      .subscribe(res => {
        console.log(res);
        this.brandList = res;
      })
  }
  // offline form functions
  createItemOffline() {
    return this.fb.group({
      'DetailTypeID': '',
      'DisplayName': '',
      'Details': ''
    });
  }
  addItemOffline() {
    const control = <FormArray>this.offlineSellerForm.controls['Details'];
    control.push(this.createItemOffline());
  }
  removeDetailsOffline(i: number) {
    const control = <FormArray>this.offlineSellerForm.controls['Details'];
    control.removeAt(i);
  }
  createOfflineSeller(data: OfflineSeller) {
    // this.userservice.createOfflineSeller(data)
    //   .subscribe(res => {
    //     console.log(res);
    //     alert('Offline Seller added succesfully');
    //     this.offlineSellerForm.reset();
    //   });
  }
  // select type brand or seller
  selectType(data) {
    if (data == 'brand') {
      console.log(data);
      this.selectDropdown = data;
      this.userservice.getBrandList()
        .subscribe(res => {
          this.BrandList = res;
        })
    } else {
      this.selectDropdown = data;
      // get offline seller list
      this.userservice.getOfflineSellerList()
        .subscribe(res => {
          console.log(res);
          this.offlineSellerList = res;
        })
    }
  }
  backClicked() {
    this._location.back();
  }
  skip() {
    this._location.back();
  }
  insuranceFormData(form: NgForm) {
    console.log(form.value);
    this.dataservice.getData(form.value);
  }
}

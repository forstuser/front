import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { OnlineSeller } from './../../../../../_models/onlineSeller.interface';
import { OfflineSeller } from './../../../../../_models/offlineSeller.interface';
import { UserService } from './../../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-info',
  templateUrl: './seller-info.component.html',
  styleUrls: ['./seller-info.component.css']
})
export class SellerInfoComponent implements OnInit {
  offlineSeller: OfflineSeller;
  onlineSeller: OnlineSeller;
  sellerList: Object;
  sellerFormType: String;
  public onlineSellerForm: FormGroup;
  public offlineSellerForm: FormGroup;
  // items: OfflineSeller [] = [];
  // items: OnlineSeller [] = [];
  constructor(private userservice: UserService,private fb: FormBuilder) { }

  ngOnInit() {
    // get offline seller list
    this.userservice.getOfflineSellerList()
      .subscribe(res =>{
        // console.log(res);
        this.offlineSeller = res;
      })
    // get online seller list
    this.userservice.getOnlineSellerList()
      .subscribe(res =>{
        // console.log(res);
        this.onlineSeller = res;
      })
      // create online seller form
      this.onlineSellerForm = this.fb.group({
        'Name' : ['', Validators.required],
        'URL' : '',
        'GstinNo': '',
         Details: this.fb.array([ this.createItemOnline(), ])
      });
      // create offline seller form
      this.offlineSellerForm = this.fb.group({
        'Name' : [null, Validators.required],
        'OwnerName': '',
        'GstinNo': '',
        'PanNo':  '',
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
        Details: this.fb.array([ this.createItemOffline(), ])
      });
  }
// online form functions
  createItemOnline() {
    return this.fb.group({
      'DetailTypeID': '',
      'DisplayName': '',
      'Details': '',
    });
  }
  addItemOnline() {
    const control = <FormArray>this.onlineSellerForm.controls['Details'];
    control.push(this.createItemOnline());
  }
  removeDetailsOnline(i: number) {
    const control = <FormArray>this.onlineSellerForm.controls['Details'];
    control.removeAt(i);
  }
  createOnlineSeller(data: OnlineSeller) {
    console.log(data);
    // this.userservice.createOnlineSeller(data)
    //   .subscribe(res => {
    //     console.log(res);
    //     alert('New Online Seller added succesfully');
    //     this.onlineSellerForm.reset();
    //   });
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
  // select seller type in dropdown
  selectSellerType(data){
    console.log(data);
    if(data=='offline'){
      this.sellerList = this.offlineSeller.OfflineSellerList;
    } else{
      this.sellerList = this.onlineSeller.SellerList;
    }
    console.log(this.sellerList);
  }
  // select seller in dropdown
  selectSeller(data){
    console.log(data)
  }
    // select seller type in dropdown
    selectSellerType2(data){
      console.log(data);
      this.sellerFormType = data;
    }
}

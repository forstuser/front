import { FunctionService } from './../../../../_services/function.service';
import { Category } from './../../../../_models/category';
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
  cat:Category;
  constructor(private userService: UserService, private fb: FormBuilder, private functionService:FunctionService) {
   }
  ngOnInit() {
      // get list of category
      this.userService.getCategoryList(2) // 2 for category refer to api doc
      .subscribe(getCat => {
        this.cat = getCat;
        console.log('category is ' + getCat);
      });
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
    this.userService.createOfflineSeller(data)
      .subscribe(res => {
        console.log(res);
        alert('Offline Seller added succesfully');
        this.offlineSellerForm.reset();
      });
  }
    // function for avoid only space submit
    avoidSpace(e){
      this.functionService.NoWhitespaceValidator(this.offlineSellerForm,e)
    }
}

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
    this.offlineSellerForm = this.fb.group({
      'seller_name' : [null, Validators.required],
      'owner_name': '',
      'gstin': '',
      'pan_no':  '',
      'reg_no': '',
      'is_service':'',
      'is_onboarded':'',
      'address': '',
      'city': '',
      'state': '',
      'pincode': '',
      'latitude': '',
      'longitude': '',
      'url':'',
      'email':'',
      'contact_no':''
    });
  }

  createOfflineSeller(data) {
    console.log(data);
    this.userService.createOfflineSeller(data)
      .subscribe(res => {
        console.log(res);
        alert('Offline Seller added succesfully');
        this.offlineSellerForm.reset();
      },error=>{
        console.log(error);
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      });
  }
    // function for avoid only space submit
    avoidSpace(e){
      this.functionService.NoWhitespaceValidator(this.offlineSellerForm,e)
    }
}

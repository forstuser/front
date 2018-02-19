import { Category } from './../../../../_models/category';
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
  cat:Category;

  constructor(private userService: UserService, private fb: FormBuilder, private functionService:FunctionService) {
   }
  ngOnInit() {
    this.onlineSellerForm = this.fb.group({
      'seller_name' : ['', Validators.required],
      'url' : ['', Validators.required],
      'gstin': '',
      'contact':'',
      'email':''
    });
  }
  //  create online seller function
  createOnlineSeller(data: OnlineSeller) {
    // console.log(data);
    this.userService.createOnlineSeller(data)
      .subscribe((res) => {
        console.log(res);
        alert('New Online Seller added succesfully');
        this.onlineSellerForm.reset();
      },(error=>{
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }));
  }
  // function for avoid only space submit
  avoidSpace(e){
    this.functionService.NoWhitespaceValidator(this.onlineSellerForm,e)
  }
}

import { FunctionService } from './../../../../_services/function.service';
import { Category, CategoryList } from './../../../../_models/category';
import { UserService } from './../../../../_services/user.service';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { OnlineSeller } from './../../../../_models/onlineSeller.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-online-seller-list',
  templateUrl: './online-seller-list.component.html',
  styleUrls: ['./online-seller-list.component.css']
})
export class OnlineSellerListComponent implements OnInit {
  onlineSeller: OnlineSeller;
  showDialog = false;
  onlineSellerForm: FormGroup;
  cat: Category;
  showOnlineSellerList: boolean = true; // for toggle form
  constructor(private userService: UserService, private fb: FormBuilder,private functionService:FunctionService) {
  }

  ngOnInit() {
    this.onlineSellerForm = new FormGroup({
      seller_name: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      gstin: new FormControl('', Validators.required),
      contact: new FormControl(''),
      email: new FormControl(''),
      status_type: new FormControl(''),
      sid:new FormControl('')
    });
    // get online seller list
    this.userService.getOnlineSellerList()
      .subscribe(onlineSellerList => {
        this.onlineSeller = onlineSellerList;
        console.log(this.onlineSeller);
      });
  }
  // passs current brand id as argument and open the next page model
  openOnlineSellerModel(item) {
    console.log('item is ', item);
    this.showOnlineSellerList = false;
    // reset edit online Seller form
    this.onlineSellerForm = new FormGroup({
      seller_name: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      gstin: new FormControl('', Validators.required),
      contact: new FormControl(''),
      email: new FormControl(''),
      status_type:new FormControl(''),
      sid:new FormControl('')
    });
    // populate prefilled value in form
    this.onlineSellerForm.setValue({
      seller_name: item.seller_name,
      url: item.url,
      gstin: item.gstin,
      contact: item.contact,
      email: item.email,
      status_type:item.status_type,
      sid:item.sid
    });
  }

  // update online seller
  updateOnlineSeller(req: any) {
    console.log(req);
    if(req.status_type==1){
      this.userService.updateOnlineSeller(req)
      .subscribe(res => {
        // console.log(res);
        alert('Online Seller updated successfully');
        this.showOnlineSellerList = true;
        this.userService.getOnlineSellerList() // list update after edit
          .subscribe(onlineSeller => {
            this.onlineSeller = onlineSeller;
          });
      });
    }
    else{
      alert("Please Active first then update");
    }
  }
  // delete online seller
  deleteOnlineSeller(sellerId: number) {
    this.userService.deleteOnlineSeller(sellerId)
      .subscribe(res => {
        // console.log(res);
        alert('Online Seller deleted successfully');
        this.userService.getOnlineSellerList() // list update after edit
          .subscribe(onlineSeller => {
            this.onlineSeller = onlineSeller;
          });
      });
  }
  // back button 
  back() {
    this.showOnlineSellerList = true;
  }
    // function for avoid only space submit
    avoidSpace(e){
      this.functionService.NoWhitespaceValidator(this.onlineSellerForm,e)
    }
}

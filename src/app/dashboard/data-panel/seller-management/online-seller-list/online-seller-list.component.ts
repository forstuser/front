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
  constructor(private userService: UserService, private fb: FormBuilder) {
  }

  ngOnInit() {
    // get list of category
    this.userService.getCategoryList(2) // 2 for category refer to api doc
      .subscribe(getCat => {
        this.cat = getCat.CategoryList;
        console.log('category is ', this.cat);
      });
    this.onlineSellerForm = new FormGroup({
      Name: new FormControl('', Validators.required),
      URL: new FormControl(''),
      GstinNo: new FormControl(''),
      ID: new FormControl(''),
      Details: new FormArray([])
    });
    // get online seller list
    this.userService.getOnlineSellerList()
      .subscribe(onlineSellerList => {
        this.onlineSeller = onlineSellerList;
        console.log(this.onlineSeller);
      });
  }
  // function for add row in detials field
  createItem() {
    return this.fb.group({
      'CategoryID': [null],
      'DetailID': [null],
      'DetailTypeID': [null],
      'DisplayName': [null],
      'Details': [null]
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
  // passs current brand id as argument and open the next page model
  openOnlineSellerModel(item) {
    // console.log('item is ', item);
    // reset  editBrand form
    this.onlineSellerForm = new FormGroup({
      Name: new FormControl(''),
      URL: new FormControl(''),
      GstinNo: new FormControl(''),
      ID: new FormControl(''),
      Details: new FormArray([])
    });
    // get information of current selected brand
    this.userService.getOnlineSellerDetailsbyID(item.ID)
      .subscribe(res => {
        // this.showDialog = true ; // for show dialog
        this.showOnlineSellerList = false;
        console.log(res);
        // prop autofill data to form
        this.onlineSellerForm.controls['ID'].setValue(res.ID);
        this.onlineSellerForm.controls['Name'].setValue(res.Name);
        this.onlineSellerForm.controls['URL'].setValue(res.URL);
        this.onlineSellerForm.controls['GstinNo'].setValue(res.GstinNo);
        // loop for Details array
        res.Details.forEach(
          (po) => {
            // console.log(i);
            (<FormArray>this.onlineSellerForm.controls['Details']).push(this.createDetailsFormGroup(po));
          });
      });
  }
  createDetailsFormGroup(payOffObj) {
    return new FormGroup({
      CategoryID: new FormControl(payOffObj.CategoryID),
      DetailID: new FormControl(payOffObj.DetailID),
      DetailTypeID: new FormControl(payOffObj.DetailTypeID),
      DisplayName: new FormControl(payOffObj.DisplayName),
      Details: new FormControl(payOffObj.Details)
    });
  }
  // update online seller
  updateOnlineSeller(req: any) {
    console.log(req);
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
  // delete online seller
  deleteOnlineSeller(req: any) {
    console.log(req);
    const sellerId = { 'ID': req.ID };
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
}

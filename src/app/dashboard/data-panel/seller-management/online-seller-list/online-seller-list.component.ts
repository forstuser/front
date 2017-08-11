import { UserService } from './../../../../_services/user.service';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
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
  constructor(private userService: UserService, private fb: FormBuilder) {
  }

  ngOnInit() {
     this.onlineSellerForm = new FormGroup({
      Name: new FormControl(''),
      URL: new FormControl(''),
      GstinNo: new FormControl(''),
      ID: new FormControl(''),
      Details: new FormArray([])
    });
    this.userService.getOnlineSellerList()
      .subscribe( onlineSellerList => {
        this.onlineSeller = onlineSellerList;
        console.log(this.onlineSeller);
      });
  }
  // function for add row in detials field
  createItem() {
    return this.fb.group({
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
  // passs current brand id as argument and open the popup
  openOnlineSellerModel(item) {
    console.log('item is ', item);
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
      this.showDialog = true ; // for show dialog
      console.log(res);
      // prop autofill data to form
      this.onlineSellerForm.controls['ID'].setValue(res.ID);
      this.onlineSellerForm.controls['Name'].setValue(res.Name);
      this.onlineSellerForm.controls['URL'].setValue(res.URL);
      this.onlineSellerForm.controls['GstinNo'].setValue(res.GstinNo);
      res.Details.forEach(
      (po) => {
        (<FormArray>this.onlineSellerForm.controls['Details']).push(this.createDetailsFormGroup(po));
      });
    });
  }
 createDetailsFormGroup(payOffObj) {
    return new FormGroup({
      DetailID: new FormControl(payOffObj.DetailID),
      DetailTypeID: new FormControl(payOffObj.DetailTypeID),
      DisplayName: new FormControl(payOffObj.DisplayName),
      Details: new FormControl(payOffObj.Details)
    });
  }
  updateOnlineSeller( brand: any) {
    console.log(brand);
    this.userService.updateOnlineSeller(brand)
      .subscribe( res => {
        // console.log(res);
        alert('Online Seller updated successfully');
        this.showDialog = false ;
        this.userService.getOnlineSellerList() // list update after edit
          .subscribe(onlineSeller => {
          this.onlineSeller = onlineSeller;
        });
    });
  }
  // delete brand
  deleteOnlineSeller( brand: any) {
    console.log(brand);
    const brandId = {'ID': brand.ID };
    this.userService.deleteOnlineSeller(brandId)
      .subscribe( res => {
        // console.log(res);
        alert('Online Seller deleted successfully');
        this.userService.getOnlineSellerList() // list update after edit
          .subscribe(onlineSeller => {
          this.onlineSeller = onlineSeller;
        });
    });
  }
}

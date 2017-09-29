import { Category } from './../../../../_models/category';
import { OfflineSeller } from './../../../../_models/offlineSeller.interface';
import { UserService } from './../../../../_services/user.service';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-offline-seller-list',
  templateUrl: './offline-seller-list.component.html',
  styleUrls: ['./offline-seller-list.component.css']
})
export class OfflineSellerListComponent implements OnInit {
  offlineSeller: OfflineSeller;
  showDialog = false;
  offlineSellerForm: FormGroup;
  cat:Category;
  showOfflineSellerList: boolean = true; // for toggle form
  constructor(private userService: UserService, private fb: FormBuilder) {
  }

  ngOnInit() {
      // get list of category
      this.userService.getCategoryList(2) // 2 for category refer to api doc
      .subscribe(getCat => {
        this.cat = getCat;
        console.log('category is ' + getCat);
      });
     this.offlineSellerForm = new FormGroup({
      ID: new FormControl(''),
      Name: new FormControl(''),
      OwnerName: new FormControl(''),
      GstinNo: new FormControl(''),
      PanNo: new FormControl(''),
      RegNo: new FormControl(''),
      ServiceProvider: new FormControl(''),
      Onboarded: new FormControl(''),
      HouseNo: new FormControl(''),
      Block: new FormControl(''),
      Street: new FormControl(''),
      Sector: new FormControl(''),
      City: new FormControl(''),
      State: new FormControl(''),
      PinCode: new FormControl(''),
      NearBy: new FormControl(''),
      Lattitude: new FormControl(''),
      Longitude: new FormControl(''),
      Details: new FormArray([])
    });
    this.userService.getOfflineSellerList()
      .subscribe( offlineSellerList => {
        this.offlineSeller = offlineSellerList;
        // console.log(this.offlineSeller);
      });
  }
  // function for add row in detials field
  createItem() {
    return this.fb.group({
      'CategoryID':[null],
      'DetailID': [null],
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
  // passs current brand id as argument and open the popup
  openOfflineSellerModel(item) {

    this.showOfflineSellerList = false ; // for show dialog
    // reset  editBrand form
    this.offlineSellerForm = new FormGroup({
      ID: new FormControl(''),
      Name: new FormControl(''),
      OwnerName: new FormControl(''),
      GstinNo: new FormControl(''),
      PanNo: new FormControl(''),
      RegNo: new FormControl(''),
      ServiceProvider: new FormControl(''),
      Onboarded: new FormControl(''),
      HouseNo: new FormControl(''),
      Block: new FormControl(''),
      Street: new FormControl(''),
      Sector: new FormControl(''),
      City: new FormControl(''),
      State: new FormControl(''),
      PinCode: new FormControl(''),
      NearBy: new FormControl(''),
      Lattitude: new FormControl(''),
      Longitude: new FormControl(''),
      Details: new FormArray([])
    });
      // // get information of current selected brand
      this.userService.getOfflineSellerDetailsbyID(item)
        .subscribe(res => {
        // this.showDialog = true ; // for show dialog
        // this.responseSeller = res;
        console.log(res);
        // prop autofill data to form
        this.offlineSellerForm.controls['ID'].setValue(res.ID);
        this.offlineSellerForm.controls['Name'].setValue(res.Name);
        this.offlineSellerForm.controls['OwnerName'].setValue(res.OwnerName);
        this.offlineSellerForm.controls['GstinNo'].setValue(res.GstinNo);
        this.offlineSellerForm.controls['PanNo'].setValue(res.PanNo);
        this.offlineSellerForm.controls['RegNo'].setValue(res.RegNo);
        this.offlineSellerForm.controls['ServiceProvider'].setValue(res.ServiceProvider);
        this.offlineSellerForm.controls['Onboarded'].setValue(res.Onboarded);
        this.offlineSellerForm.controls['HouseNo'].setValue(res.HouseNo);
        this.offlineSellerForm.controls['Block'].setValue(res.Block);
        this.offlineSellerForm.controls['Street'].setValue(res.Street);
        this.offlineSellerForm.controls['Sector'].setValue(res.Sector);
        this.offlineSellerForm.controls['City'].setValue(res.City);
        this.offlineSellerForm.controls['State'].setValue(res.State);
        this.offlineSellerForm.controls['PinCode'].setValue(res.PinCode);
        this.offlineSellerForm.controls['NearBy'].setValue(res.NearBy);
        this.offlineSellerForm.controls['Lattitude'].setValue(res.Lattitude);
        this.offlineSellerForm.controls['Longitude'].setValue(res.Longitude);
        res.Details.forEach(
        (po) => {
          (<FormArray>this.offlineSellerForm.controls['Details']).push(this.createDetailsFormGroup(po));
        });
      });
  }
 createDetailsFormGroup(payOffObj) {
    return new FormGroup({
      CategoryID:new FormControl(payOffObj.CategoryID),
      DetailID: new FormControl(payOffObj.DetailID),
      DetailTypeID: new FormControl(payOffObj.DetailTypeID),
      DisplayName: new FormControl(payOffObj.DisplayName),
      Details: new FormControl(payOffObj.Details)
    });
  }
  updateOfflineSeller( brand: any) {
    console.log(brand);
    this.userService.updateOfflineSeller(brand)
      .subscribe( res => {
        // console.log(res);
        alert('Offline Seller updated successfully');
        this.showOfflineSellerList = true ;
        this.userService.getOfflineSellerList() // list update after edit
          .subscribe(offlineSellerList => {
          this.offlineSeller = offlineSellerList;
        });
    });
  }
  // delete offline seller
  deleteOfflineSeller( brand: any) {
    console.log(brand);
    const brandId = {'ID': brand.ID };
    this.userService.deleteOfflineSeller(brandId)
      .subscribe( res => {
        // console.log(res);
        alert('Offline Seller deleted successfully');
        this.userService.getOfflineSellerList() // list update after edit
          .subscribe(offlineSellerList => {
          this.offlineSeller = offlineSellerList;
        });
    });
  }
    // back button 
    back() {
      this.showOfflineSellerList = true;
    }
}

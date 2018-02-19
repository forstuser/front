import { FunctionService } from './../../../../_services/function.service';
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
  activeOfflineSellers: any;
  showDialog = false;
  offlineSellerForm: FormGroup;
  cat: Category;
  showOfflineSellerList: boolean = true; // for toggle form
  offlineSellerNewId: number;
  offlineSellerId: number;
  constructor(private userService: UserService, private fb: FormBuilder, private functionService: FunctionService) {
  }

  ngOnInit() {
    this.offlineSellerForm = new FormGroup({
      sid: new FormControl(''),
      seller_name: new FormControl(''),
      owner_name: new FormControl(''),
      gstin: new FormControl(''),
      pan_no: new FormControl(''),
      reg_no: new FormControl(''),
      is_service: new FormControl(''),
      is_onboarded: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      pincode: new FormControl(''),
      latitude: new FormControl(''),
      longitude: new FormControl(''),
      url: new FormControl(''),
      email: new FormControl(''),
      contact_no: new FormControl(''),
      status_type: new FormControl('')
    });
    this.allOfflineSeller();
    this.activeOfflineSeller();
  }
  // get all offline seller list
  allOfflineSeller() {
    this.userService.getOfflineSellerList()
      .subscribe(offlineSellerList => {
        this.offlineSeller = offlineSellerList;
        console.log(this.offlineSeller);
      });
  }
  activeOfflineSeller() {
    this.userService.getOfflineSellerListByStatus(1)
      .subscribe(res => {
        this.activeOfflineSellers = res;
        console.log(this.activeOfflineSellers);
      })
  }

  // passs current brand id as argument and open the popup
  openOfflineSellerModel(item) {
    console.log('item is ', item);
    this.showOfflineSellerList = false; // for show dialog
    // reset  editBrand form
    this.offlineSellerForm = new FormGroup({
      sid: new FormControl(''),
      seller_name: new FormControl(''),
      owner_name: new FormControl(''),
      gstin: new FormControl(''),
      pan_no: new FormControl(''),
      reg_no: new FormControl(''),
      is_service: new FormControl(''),
      is_onboarded: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      pincode: new FormControl(''),
      latitude: new FormControl(''),
      longitude: new FormControl(''),
      url: new FormControl(''),
      email: new FormControl(''),
      contact_no: new FormControl(''),
      status_type: new FormControl('')
    });

    // prop autofill data to form
    this.offlineSellerForm.setValue({
      sid: item.sid,
      owner_name: item.owner_name,
      seller_name: item.seller_name,
      gstin: item.gstin,
      pan_no: item.pan_no,
      reg_no: item.reg_no,
      is_service: item.is_service,
      is_onboarded: item.is_onboarded,
      address: item.address,
      city: item.city,
      state: item.state,
      pincode: item.pincode,
      latitude: item.latitude,
      longitude: item.longitude,
      url: item.url,
      email: item.email,
      contact_no: item.contact_no,
      status_type: item.status_type,
    });
  }
  // update offline seller
  updateOfflineSeller(req: any) {
    console.log(req);
    this.userService.updateOfflineSeller(req)
      .subscribe((res) => {
        // console.log(res);
        alert('Offline Seller updated successfully');
        this.showOfflineSellerList = true;
        this.userService.getOfflineSellerList() // list update after edit
          .subscribe(offlineSellerList => {
            this.offlineSeller = offlineSellerList;
          });
      },(error=>{
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }));
  }
  // delete offline seller
  deleteOfflineSeller(sellerId: any) {
    this.userService.deleteOfflineSeller(sellerId)
      .subscribe(res => {
        // console.log(res);
        alert('Offline Seller deleted successfully');
        this.userService.getOfflineSellerList() // list update after edit
          .subscribe(offlineSellerList => {
            this.offlineSeller = offlineSellerList;
          });
      });
  }
  // get list of brand according to status
  onSelectStatus(req) {
    console.log(req);
    if (req == 1 || req == 2 || req == 11) {
      this.userService.getOfflineSellerListByStatus(req)
        .subscribe(res => {
          this.offlineSeller = res;
          console.log(this.offlineSeller);
        })
    } else {
      this.allOfflineSeller();
    }

  }
  // link brand
  onClickUserOfflineSeller(req) {
    this.offlineSellerId = req;
  }
  onSelectOfflineSeller(req) {
    this.offlineSellerNewId = req;
  }
  linkOfflineSeller() {
    this.userService.verifyUserOfflineSeller(this.offlineSellerId, this.offlineSellerNewId)
      .subscribe(res => {
        alert("Offline Seller Replaced Successfully")
        this.allOfflineSeller();
      })
  }
  // back button 
  back() {
    this.showOfflineSellerList = true;
  }
  // function for avoid only space submit
  avoidSpace(e) {
    this.functionService.NoWhitespaceValidator(this.offlineSellerForm, e)
  }
}

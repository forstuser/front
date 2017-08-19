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
  constructor(private userservice: UserService) { }

  ngOnInit() {
    // get offline seller list
    this.userservice.getOfflineSellerList()
      .subscribe(res =>{
        console.log(res);
        this.offlineSeller = res;
      })
    // get online seller list
    this.userservice.getOnlineSellerList()
      .subscribe(res =>{
        console.log(res);
        this.onlineSeller = res;
      })
  }
  // select seller type in dropdown
  selectSeller(data){
    console.log(data);
    if(data=='offline'){
      this.sellerList = this.offlineSeller.OfflineSellerList;
    } else{
      this.sellerList = this.onlineSeller.SellerList;
    }
    console.log(this.sellerList);
  }
}

import { Component, OnInit, ElementRef } from '@angular/core';
import { UserService } from '../../../../_services/user.service';
import { appConfig } from '../../../../app.config';
import { ModalService } from '../../../../_services/modal.service';
import { NgForm } from '@angular/forms';
import { NgxNotificationService } from 'ngx-notification';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-new-seller',
  templateUrl: './new-seller.component.html',
  styleUrls: ['./new-seller.component.css']
})
export class NewSellerComponent implements OnInit {
  new: number = appConfig.JOB_STATUS.NEW;
  ce: number = appConfig.USERS.CE;
  imageUrl: string = appConfig.apiUrl;
  sellers: any;
  discardView: string = 'discardView';
  sellerId: number;
  users: any;
  jobId: number;
  userType: any;
  discardReasons: any[] = [];
  showSellerPopup: boolean = false;
  rawImageArray: any[] = [];
  imageArray: any[] = [];
  images: any[] = [];
  imageArrayLength: number;
  imageIndex: number = 0;
  imagerotation: number = 0;
  constructor(private __route: ActivatedRoute, private __router: Router, private __userservice: UserService, private __modalservice: ModalService, private __ngxNotificationService: NgxNotificationService) {
    const info = JSON.parse(localStorage.getItem('currentUser'))
    if (info != null) {
      this.userType = info.role_type
    } else {
      this.__router.navigateByUrl('/login')
    }

  }

  ngOnInit() {
    if (this.userType == appConfig.USERS.ADMIN || this.userType == appConfig.USERS.SUPERADMIN) {
      this.getSellerList();
      this.getReferenceData();
    }
  }
  openModal(id: string) {
    this.__modalservice.open(id);
  }

  closeModal(id: string) {
    this.__modalservice.close(id);
  }
  public discardButtonClick(req) {
    this.jobId = req;
    this[this.discardView + req] = !this[this.discardView + req];
  }

  public getSellerList() {
    let sellerListCall = '';
    if (this.__route.snapshot.routeConfig.path == 'onHoldSeller') {
      sellerListCall = 'seller_type_id=5&is_onboarded=true';
    } else if (this.__route.snapshot.routeConfig.path == 'newSeller') {
      sellerListCall = 'seller_type_id=2&is_onboarded=true';
    }
    this.__userservice.sellerList(sellerListCall)
      .subscribe(seller => {
        console.log(seller)
        this.sellers = seller;
      });
  }

  public getReferenceData() {
    this.__userservice.getReferenceData()
      .subscribe(res => {
        console.log(res);
        this.discardReasons = res['data'].reject_reasons
      })
  }
  public showSeller(req) {
    console.log(req);
    this.showSellerPopup = false;
    this.sellerId = req.id;
    this.images = [];
    let count = 0;
    this.imageArrayLength = count;
    this.rawImageArray = req.seller_details.business_details.documents;
    if (this.rawImageArray.length == 0) {
      alert("There is no image in this bill please contact Admin")
    }
    this.rawImageArray.forEach((i, index) => {
      let imageIndex = i.index || index;
      this.images.push(this.imageUrl + 'api/sellers/' + this.sellerId + '/upload/2/images/' + imageIndex);
      count += 1;
    })
    console.log(this.images)
    this.imageArrayLength = count;
    this.showSellerPopup = true;
  }
  close($event) {
    if ($event == null) {
      this.showSellerPopup = false;
    }
  }
  prevImage() {
    if (this.imageIndex > 0) {
      this.imageIndex = this.imageIndex - 1;
    }
  }
  nextImage() {
    if (this.imageIndex < this.imageArrayLength - 1) {
      this.imageIndex = this.imageIndex + 1;
    }
  }
  rotate() {
    this.imagerotation = this.imagerotation + 90;
  }
}

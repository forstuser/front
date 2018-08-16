import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../../_services/user.service';
import { appConfig } from '../../../../../app.config';
import { NgForm } from '@angular/forms';
import { NgxNotificationService } from 'ngx-notification';
declare var webGlObject: any;
@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {
  imageUrl: string = appConfig.apiUrl;
  sellers: any[] = []
  documentDate: string;
  cashbackId: number;
  jobDetails: any;
  rawImageArray: any[] = [];
  imageArray: any[] = [];
  images: any[] = [];
  imageArrayLength: number;
  imageIndex: number = 0;
  imagerotation: number = 0;
  blank: string = 'NA';
  constructor(private __route: ActivatedRoute, private __router: Router, private __userService: UserService, private __ngxNotificationService: NgxNotificationService) {
    this.cashbackId = this.__route.snapshot.params.id;
    this.getCashbackJobByID();
    this.getUserSellers();
  }

  ngOnInit() {
    webGlObject.init();
    this.images[this.imageIndex] = 'assets/images/loader.gif'
  }
  getCashbackJobByID() {
    this.__userService.cashbackJobByID(this.cashbackId)
      .subscribe(res => {
        console.log("huge response", res)
        this.images = [];
        let count = 0;
        this.jobDetails = res['data'];
        this.rawImageArray = res['data'].copies;
        this.documentDate = this.jobDetails.products[0].document_date;
        if (this.rawImageArray.length == 0) {
          alert("There is no image in this bill please contact Admin")
        }
        for (let i of this.rawImageArray) {
          if (i.status_type != 9) {
            this.imageArray.push(i);
            this.images.push(this.imageUrl + 'api' + i.copyUrl)
            count += 1;
          }
        }
        this.imageArrayLength = count;
      }, err => {
        console.log("error", err);
      })
  }
  getUserSellers() {
    this.__userService.getUserSeller(this.cashbackId)
      .subscribe(res => {
        this.sellers = res['data'];
        console.log("sellers", res);
      })
  }
  rotate() {
    this.imagerotation = this.imagerotation + 90;
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
  newWindow() {
    let url = this.images[this.imageIndex];
    window.open(url, 'Image', 'resizable=1');
  }
  verifySeller(res: NgForm) {
    let hours = res.value.hours || '00';
    let mins = res.value.mins || '00';
    let seconds = res.value.seconds || '00';
    let date = this.documentDate.split("T")[0] + "T" + hours + ":" + mins + ":" + seconds + ".000Z";
    this.__userService.verifySeller({ 'seller_id': this.jobDetails.seller_id, 'document_number': res.value.document_number, 'document_date': date }, this.cashbackId)
      .subscribe((res) => {
        console.log("success", res);
        this.__ngxNotificationService.sendMessage('Seller Verified', 'dark', 'bottom-right');
      }, (err) => {
        console.log("error", err)
        this.__ngxNotificationService.sendMessage(err.error.reason, 'dark', 'bottom-right');
        this.__router.navigateByUrl('/dashboard/new');
      })
  }
}

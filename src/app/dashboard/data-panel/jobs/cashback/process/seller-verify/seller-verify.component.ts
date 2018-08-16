import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../../../_services/user.service';
import { appConfig } from '../../../../../../app.config';
import { NgForm } from '@angular/forms';
import { NgxNotificationService } from 'ngx-notification';


@Component({
  selector: 'app-seller-verify',
  templateUrl: './seller-verify.component.html',
  styleUrls: ['./seller-verify.component.css']
})
export class SellerVerifyComponent implements OnInit {
  sellers: any[] = []
  @Input() jobDetails: any;
  blank: string = 'NA';
  cashbackId: number;
  documentDate: string;
  constructor(private __router: Router, private __userService: UserService, private __ngxNotificationService: NgxNotificationService) {


    // this.getUserSellers();
  }

  ngOnInit() {

  }
  ngOnChanges(changes) {
    // console.log("from parent", this.jobDetails)
    if (this.jobDetails) {
      this.cashbackId = this.jobDetails.id;
      this.documentDate = this.jobDetails.products[0].document_date;
      this.getUserSellers();
    }

  }
  getUserSellers() {
    this.__userService.getUserSeller(this.cashbackId)
      .subscribe(res => {
        this.sellers = res['data'];
        console.log("sellers", res);
      })
  }

  verifySeller(res: NgForm) {
    let hours = res.value.hours || '00';
    let mins = res.value.mins || '00';
    let seconds = res.value.seconds || '00';
    let date = this.documentDate.split("T")[0] + "T" + hours + ":" + mins + ":" + seconds + "+05:30";
    let seller_id = this.jobDetails.seller_id || res.value.seller_id;
    this.__userService.verifySeller({ 'seller_id': seller_id, 'document_number': res.value.document_number, 'document_date': date }, this.cashbackId)
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

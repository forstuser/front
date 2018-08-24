import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  message: boolean = true;
  sellerType: any[] = [];
  sellerData: any;
  states: any[] = [];
  cities: any[] = [];
  showSellerForm: boolean = false;
  @Output() messageEvent = new EventEmitter<boolean>();
  constructor(private __router: Router, private __userService: UserService, private __ngxNotificationService: NgxNotificationService) {


    // this.getUserSellers();
  }

  ngOnInit() {
    this.getReferenceData();
  }
  ngOnChanges(changes) {
    // console.log("from parent", this.jobDetails)
    if (this.jobDetails) {
      this.cashbackId = this.jobDetails.id;
      this.documentDate = this.jobDetails.products[0].document_date;
      this.getUserSellers();
    }

  }
  getReferenceData() {
    this.__userService.getReferenceData()
      .subscribe(res => {
        console.log("reference data", res)
        this.sellerType = res['data'].seller_types;
        this.states = res['data'].states;
        console.log(this.states)
      })
  }
  getUserSellers() {
    this.__userService.getUserSeller(this.cashbackId)
      .subscribe(res => {
        this.sellers = res['data'];
        console.log("sellers", res);
      })
  }

  verifySeller(res: NgForm) {
    console.log(res.value)
    let hours = res.value.hours || '00';
    let mins = res.value.mins || '00';
    let seconds = res.value.seconds || '00';
    let date = this.documentDate.split("T")[0] + "T" + hours + ":" + mins + ":" + seconds + "+05:30";
    let seller_id = this.jobDetails.seller_id || res.value.seller_id;
    let request_data = { 'seller_id': seller_id, 'document_number': res.value.document_number, 'document_date': date, 'gstin': res.value.gstin };
    if (request_data.seller_id == undefined) {
      delete request_data['seller_id'];
    }
    this.__userService.verifySeller(request_data, this.cashbackId)
      .subscribe((res) => {
        this.__ngxNotificationService.sendMessage('Seller Verified', 'dark', 'bottom-right');
        this.sellerData = res['data'].sellers[0];
        this.selectState(this.sellerData.state_id)
        console.log(this.sellerData)
        this.showSellerForm = true;
      }, (err) => {
        console.log("error", err)
        if (err.status == 409) {
          this.__ngxNotificationService.sendMessage("GSTIN is invalid JOB Discarded", 'dark', 'bottom-right');
        } else {
          this.__ngxNotificationService.sendMessage(err.error.reason, 'dark', 'bottom-right');
        }
      })
  }
  updateSeller(res: NgForm) {
    console.log(res.value);
    this.messageEvent.emit(this.message)
    this.showSellerForm = false;
  }
  sellerMismatch() {
    this.__userService.discardJOB([{ 'id': this.cashbackId, 'reason_id': 1 }])
      .subscribe(res => {
        console.log("res", res);
        this.__ngxNotificationService.sendMessage('Job discarded due to seller mismatch moved to new job', 'dark', 'bottom-right');
        this.__router.navigate(['new'])
      }, err => {
        console.log("error", err);
      })
  }
  public selectState(stateID) {
    console.log(stateID);
    let selectedState = this.states.filter(state => {
      return state.id == stateID
    })
    this.cities = selectedState[0].cities;
    console.log("selected state si", selectedState);
  }
}

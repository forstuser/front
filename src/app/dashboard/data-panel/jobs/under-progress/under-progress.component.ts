import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../_services/user.service';
import { appConfig } from '../../../../app.config';
import { NgxNotificationService } from 'ngx-notification';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from '../../../../_services/modal.service';

@Component({
  selector: 'app-under-progress',
  templateUrl: './under-progress.component.html',
  styleUrls: ['./under-progress.component.css']
})
export class UnderProgressComponent implements OnInit {
  under_progress: number = appConfig.JOB_STATUS.UNDER_PROGRESS;
  ce: number = appConfig.USERS.CE;
  bills: any;
  assignCEView: string = 'assignCEView';
  users: any;
  jobId: number;
  userType: any;
  rawImageArray: any[] = [];
  imageArray: any[] = [];
  images: any[] = [];
  imageArrayLength: number;
  imageIndex: number = 0;
  documentDate: string;
  amount: string;
  showBillPopup: boolean = false;
  imageUrl: string = appConfig.apiUrl;
  constructor(private __router: Router, private __modalservice: ModalService, private __ngxNotificationService: NgxNotificationService, private __userservice: UserService) {
    const info = JSON.parse(localStorage.getItem('currentUser'));
    if (info != null) {
      this.userType = info.role_type
    } else {
      this.__router.navigateByUrl('/login')
    }
  }

  ngOnInit() {
    if (this.userType == appConfig.USERS.ADMIN || this.userType == appConfig.USERS.SUPERADMIN) {
      this.getAdminJobList();
    } else if (this.userType == appConfig.USERS.CE) {
      this.getCEJobList();
    }
  }
  openModal(id: string) {
    this.__modalservice.open(id);
  }

  closeModal(id: string) {
    this.__modalservice.close(id);
  }
  close($event) {
    if ($event == null) {
      this.showBillPopup = false;
    }
  }
  assignCEButtonClick(req) {
    this.jobId = req;
    this[this.assignCEView + req] = !this[this.assignCEView + req];
    this.getCEList()
  }
  getAdminJobList() {
    this.__userservice.getAdminJobList(this.under_progress)
      .subscribe(bill => {
        console.log(bill)
        this.bills = bill;
      });
  }
  getCEJobList() {
    this.__userservice.getCEJobList(this.under_progress)
      .subscribe(bill => {
        console.log(bill)
        this.bills = bill;
      });
  }
  getCEList() {
    this.__userservice.getUserList(this.ce) // 4 for _ce refer to api doc
      .subscribe(users => {
        this.users = users['data'];
        console.log(this.users, "users");
      });
  }
  assignCE(res: NgForm) {
    this.__userservice.assignCashBackJobCE([{ 'id': this.jobId, 'ce_id': Number(res.value.ce_id) }])
      .subscribe(res => {
        console.log("res", res);
        this.__ngxNotificationService.sendMessage('Assign Successfull', 'dark', 'bottom-right');
        this[this.assignCEView + this.jobId] = !this[this.assignCEView + this.jobId];
        this.getAdminJobList();
      }, err => {
        console.log("error", err);
      })
  }
  approveCashback(jobID: number) {
    this.__userservice.approveCashback([{ id: jobID }])
      .subscribe(res => {
        console.log("res", res);
        this.__ngxNotificationService.sendMessage('Approve Successfull', 'dark', 'bottom-right');
        this.getAdminJobList();
      }, err => {
        console.log("error", err);
      })
  }
  public showBill(req) {
    this.showBillPopup = false;
    this.documentDate = req.products.document_date;
    this.amount = req.products.purchase_cost;
    this.images = [];
    let count = 0;
    this.rawImageArray = req.copies;
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
    this.showBillPopup = true;
  }
}

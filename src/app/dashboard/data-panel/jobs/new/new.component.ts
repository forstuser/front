import { Component, OnInit, ElementRef } from '@angular/core';
import { UserService } from '../../../../_services/user.service';
import { appConfig } from '../../../../app.config';
import { ModalService } from '../../../../_services/modal.service';
import { NgForm } from '@angular/forms';
import { NgxNotificationService } from 'ngx-notification';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  new: number = appConfig.JOB_STATUS.NEW;
  ce: number = appConfig.USERS.CE;
  imageUrl: string = appConfig.apiUrl;
  bills: any;
  assignCEView: string = 'assignCEView';
  discardView: string = 'discardView';
  users: any;
  jobId: number;
  jobArray: any = [];
  selectedIds: any = [];
  isSelected: boolean = false;
  userType: any;
  discardReasons: any[] = [];
  yPos: any;
  xPos: any;
  showBillPopup: boolean = false;
  rawImageArray: any[] = [];
  imageArray: any[] = [];
  images: any[] = [];
  imageArrayLength: number;
  imageIndex: number = 0;
  documentDate: string;
  amount: string;
  constructor(private __router: Router, private __userservice: UserService, private __modalservice: ModalService, private __ngxNotificationService: NgxNotificationService) {
    const info = JSON.parse(localStorage.getItem('currentUser'))
    if (info != null) {
      this.userType = info.role_type
    } else {
      this.__router.navigateByUrl('/login')
    }

  }

  ngOnInit() {
    if (this.userType == appConfig.USERS.ADMIN || this.userType == appConfig.USERS.SUPERADMIN) {
      this.getAdminJobList();
      this.getReferenceData();
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

  assignCEButtonClick(req) {
    this.jobId = req;
    this[this.assignCEView + req] = !this[this.assignCEView + req];
    this.getCEList()
  }
  discardButtonClick(req) {
    this.jobId = req;
    this[this.discardView + req] = !this[this.discardView + req];
  }
  assignCE(res: NgForm) {
    this.__userservice.assignCashBackJobCE([{ 'id': this.jobId, 'ce_id': Number(res.value.ce_id) }])
      .subscribe(res => {
        console.log("res", res);
        this.__ngxNotificationService.sendMessage('Assign Successfull', 'dark', 'bottom-right');
        this.getAdminJobList();
      }, err => {
        console.log("error", err);
      })
  }
  singleCheck(req: number) {
    if (this.selectedIds.includes(req)) {
      let _index = this.selectedIds.indexOf(req);
      if (_index > -1) {
        this.selectedIds.splice(_index, 1);
      }
    } else {
      this.selectedIds.push(req);
    }
    if (this.selectedIds.length == this.bills.data.length) {
      this.isSelected = true;
    }
    if (this.selectedIds.length == 0) {
      this.isSelected = false;
    }
    console.log(this.selectedIds)
  }
  multiAssignCE(res: NgForm) {
    console.log(res.value);
    this.selectedIds.map((item) => {
      this.jobArray.push({ 'id': item, 'ce_id': Number(res.value.ce_id) })
    })
    console.log(this.jobArray);
    this.__userservice.assignCashBackJobCE(this.jobArray)
      .subscribe(res => {
        console.log("res", res);
        this.__ngxNotificationService.sendMessage('Assign Successfull', 'dark', 'bottom-right');
        this.getAdminJobList();
        this.closeModal('multipleAssignView');
      }, err => {
        console.log("error", err);
      })
  }
  checkAll() {
    this.isSelected = !this.isSelected;
    if (this.selectedIds.length != this.bills.data.length) {
      this.selectedIds = [];
      for (let bill of this.bills.data) {
        this.selectedIds.push(bill.id);
      }
      this.isSelected = true;
    } else {
      this.selectedIds = [];
      this.isSelected = false;
    }
    console.log(this.selectedIds)
  }
  getAdminJobList() {
    this.__userservice.getAdminJobList(this.new)
      .subscribe(bill => {
        console.log(bill)
        this.bills = bill;
      });
  }
  getCEJobList() {
    this.__userservice.getCEJobList(this.new)
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
  getReferenceData() {
    this.__userservice.getReferenceData()
      .subscribe(res => {
        console.log(res);
        this.discardReasons = res['data'].reject_reasons
      })
  }
  public showBill(elRef: ElementRef) {
    this.showBillPopup = false;
    console.log(elRef)
    this.yPos = 0
    this.xPos = 0
    this.yPos = elRef['y'] - 200;
    this.xPos = elRef['x'] - 600;
  }
  showBillData(req) {
    console.log(req);
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
  close($event) {
    if ($event == null) {
      this.showBillPopup = false;
    }
  }
}

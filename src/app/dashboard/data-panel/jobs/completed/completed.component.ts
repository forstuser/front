import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../_services/user.service';
import { appConfig } from '../../../../app.config';
import { ModalService } from '../../../../_services/modal.service';
import { NgForm } from '@angular/forms';
import { NgxNotificationService } from 'ngx-notification';
import { Router } from '@angular/router';
@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  complete: number = appConfig.JOB_STATUS.COMPLETE;
  ce: number = appConfig.USERS.CE;
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
    this.__userservice.getAdminJobList(this.complete)
      .subscribe(bill => {
        console.log(bill)
        this.bills = bill;
      });
  }
  getCEJobList() {
    this.__userservice.getCEJobList(this.complete)
      .subscribe(bill => {
        console.log(bill)
        this.bills = bill;
      });
  }
  getReferenceData() {
    this.__userservice.getReferenceData()
      .subscribe(res => {
        console.log(res);
        this.discardReasons = res['data'].reject_reasons
      })
  }
}
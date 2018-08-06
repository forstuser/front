import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../_services/user.service';
import { appConfig } from '../../../../app.config';
import { ModalService } from '../../../../_services/modal.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  _new: number = appConfig.JOB_STATUS.NEW;
  _ce: number = appConfig.USERS.CE;
  _bills: any;
  _assignCEView: string = '_assignCEView';
  _users: any;
  _jobId: number;
  _jobArray: any = [];
  _isSelected: boolean = false;
  constructor(private __userservice: UserService, private __modalservice: ModalService) { }

  ngOnInit() {
    this.__userservice.getAdminJobList(this._new)
      .subscribe(bill => {
        console.log(bill)
        this._bills = bill;
      });
  }
  openModal(id: string) {
    this.__modalservice.open(id);
  }

  closeModal(id: string) {
    this.__modalservice.close(id);
  }

  assignCEButtonClick(req) {
    this._jobId = req;
    this[this._assignCEView + req] = !this[this._assignCEView + req];
    this.getCEList()
  }
  assignCE(res: NgForm) {
    this.__userservice.assignCashBackJobCE([{ 'id': this._jobId, 'ce_id': Number(res.value.ce_id) }])
      .subscribe(res => {
        console.log("res", res);
      }, err => {
        console.log("error", err);
      })
  }
  multiCheckJob(req: number) {
    console.log(req);

  }
  multiAssign() {
    this.getCEList();
  }
  checkAll() {
    this._isSelected = !this._isSelected;
    console.log("call", this._isSelected)
    if (this._isSelected) {
      // push all jobs id
      for (let bill of this._bills.data) {
        this._jobArray.push({ 'id': bill.id, 'ce_id': null })
      }
      console.log(this._jobArray)
    }

  }
  //get list of _ce users 
  getCEList() {
    this.__userservice.getUserList(this._ce) // 4 for _ce refer to api doc
      .subscribe(users => {
        this._users = users['data'];
        console.log(this._users, "users");
      });
  }
}

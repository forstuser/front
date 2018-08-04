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
  new: number = appConfig.JOB_STATUS.NEW;
  ce: number = appConfig.USERS.CE;
  bills: any;
  assignCEView: string = 'assignCEView';
  users: any;
  flag: number = 1;
  constructor(private userservice: UserService, private modalservice: ModalService) { }

  ngOnInit() {
    this.userservice.getAdminJobList(this.new)
      .subscribe(bill => {
        console.log(bill)
        this.bills = bill;
      });
  }
  openModal(id: string) {
    this.modalservice.open(id);
  }

  closeModal(id: string) {
    this.modalservice.close(id);
  }
  assignCEButtonClick(req) {
    this[this.assignCEView + req] = !this[this.assignCEView + req];

  }
  assignCE(res: NgForm) {
    console.log(res.value);
  }
  // close($event) {
  //   console.log("event is", $event)
  //   if ($event == null) {
  //     this[this.assignCEView + req] = false;
  //   }
  // }
  // get list of ce users 
  getCEList() {
    this.userservice.getUserList(this.ce) // 4 for ce refer to api doc
      .subscribe(users => {
        this.users = users['data'];
        console.log(this.users, "users");
      });
  }
}

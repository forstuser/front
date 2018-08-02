import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../_services/user.service';
import { appConfig } from '../../../../app.config';
import { ModalService } from '../../../../_services/modal.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  new: number = appConfig.JOB_STATUS.NEW;
  bills: any;
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

}

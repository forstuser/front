import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../_services/user.service';
import { appConfig } from '../../../../app.config';

@Component({
  selector: 'app-under-progress',
  templateUrl: './under-progress.component.html',
  styleUrls: ['./under-progress.component.css']
})
export class UnderProgressComponent implements OnInit {
  under_progress: number = appConfig.JOB_STATUS.UNDER_PROGRESS;
  bills: any;
  constructor(private __userservice: UserService) { }

  ngOnInit() {
    this.getJobList();
  }
  getJobList() {
    this.__userservice.getAdminJobList(this.under_progress)
      .subscribe(bill => {
        console.log(bill)
        this.bills = bill;
      });
  }

}

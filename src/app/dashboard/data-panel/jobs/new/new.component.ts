import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../_services/user.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.userservice.getAdminJobList(4, 50) // new = 4 refer api doc
      .subscribe(bill => {
        console.log(bill)
      });
  }

}

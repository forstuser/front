import { AuthenticationService } from './../../_services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  isIn = false;   // store state
  emailID: string;
  userType: number;
  userTypeName: string;
  constructor(private authservice: AuthenticationService) {
    const info = JSON.parse(localStorage.getItem('currentUser'))
    console.log("info", info);
    this.emailID = info.EmailID;
    if (info.UserType == '1') {
      this.userTypeName = 'Super Admin'
    } else if (info.UserType == '2') {
      this.userTypeName = 'Admin'
    } else if (info.UserType == '3') {
      this.userTypeName = 'Customer Executive'
    } else if (info.UserType == '4') {
      this.userTypeName = 'Qualitive Executive'
    } else if (info.UserType == '5') {
      this.userTypeName = 'Consumer'
    } else if (info.UserType == '6') {
      this.userTypeName = 'Date Manager'
    } else if (info.UserType == '7') {
      this.userTypeName = 'Merchant'
    }
  }

  ngOnInit() {
  }
  toggleState() { // click handler
    const bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }
  logoutFun() {
    this.authservice.logout();
  }
}

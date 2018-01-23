import { Router } from '@angular/router';
import { AuthenticationService } from './../../_services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

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
  constructor(private authservice: AuthenticationService,private router:Router) {
    const info = JSON.parse(localStorage.getItem('currentUser'))
    // console.log("info", info);
    this.emailID = info.email;
    if (info.role_type == '1') {
      this.userTypeName = 'Super Admin'
    } else if (info.role_type == '2') {
      this.userTypeName = 'Admin'
    } else if (info.role_type == '3') {
      this.userTypeName = 'Qualitive Executive'
    } else if (info.role_type == '4') {
      this.userTypeName = 'Customer Executive'
    } else if (info.role_type == '5') {
      this.userTypeName = 'Consumer'
    } else if (info.role_type == '6') {
      this.userTypeName = 'Date Manager'
    } else if (info.role_type == '7') {
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
    Cookie.deleteAll();
  }
  
}

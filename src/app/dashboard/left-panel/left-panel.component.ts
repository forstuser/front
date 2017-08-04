import { AuthenticationService } from './../../_services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  isIn = false;   // store state
  constructor(private authservice: AuthenticationService) { }

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

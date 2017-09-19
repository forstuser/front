import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser:any;
  constructor() { }
  theme:string;
  userType: number;
  ngOnInit() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(currentUser); 
    if (currentUser.UserType == '1') {
      this.theme = 'theme-teal'
    } else if (currentUser.UserType == '2') {
      this.theme = 'theme-teal'
    } else if (currentUser.UserType == '3') {
      this.theme = 'theme-deep-purple'
    } else if (currentUser.UserType == '4') {
      this.theme = 'theme-green'
    } else if (currentUser.UserType == '5') {
      this.theme = 'theme-teal'
    } else if (currentUser.UserType == '6') {
      this.theme = 'theme-teal'
    } else if (currentUser.UserType == '7') {
      this.theme = 'theme-teal'
    }
  }

}

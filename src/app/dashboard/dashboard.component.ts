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
  role_type: number;
  ngOnInit() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // console.log(currentUser); 
    if (currentUser.role_type == '1') {
      this.theme = 'theme-teal'
    } else if (currentUser.role_type == '2') {
      this.theme = 'theme-teal'
    } else if (currentUser.role_type == '3') {
      this.theme = 'theme-deep-purple'
    } else if (currentUser.role_type == '4') {
      this.theme = 'theme-green'
    } else if (currentUser.role_type == '5') {
      this.theme = 'theme-teal'
    } else if (currentUser.role_type == '6') {
      this.theme = 'theme-teal'
    } else if (currentUser.role_type == '7') {
      this.theme = 'theme-teal'
    }
  }

}

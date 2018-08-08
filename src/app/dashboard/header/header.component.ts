import { Component, OnInit } from '@angular/core';
import { DataService } from '../../_services/data.service';
import { AuthenticationService } from '../../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: string;
  message: boolean = true;
  btnText: string = 'Hide';
  btnIcon: string = 'mdi-arrow-left';
  showPanelSwitch: boolean = false;
  showPanel: string;
  constructor(private __dataService: DataService, private __auth: AuthenticationService, private __router: Router) {
    const info = JSON.parse(localStorage.getItem('currentUser'))
    if (info != null) {
      this.name = info.full_name || 'User';
    } else {
      this.__router.navigateByUrl('/login')
    }

  }

  ngOnInit() {
    //
  }
  hidePanel() {
    this.message = !this.message
    if (this.message) {
      this.btnText = 'Hide';
      this.btnIcon = 'mdi-arrow-left';
    } else {
      this.btnText = 'Show';
      this.btnIcon = 'mdi-arrow-right';
    }
    this.__dataService.changeMessage(this.message)
  }
  expandProfile() {
    this.showPanel = 'show';
  }
  signOut() {
    this.__auth.logout();
  }
  close($event) {
    if ($event == null) {
      this.showPanel = 'hide';
    }
  }
}

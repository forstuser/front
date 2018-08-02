import { Component, OnInit } from '@angular/core';
import { DataService } from '../../_services/data.service';
import { AuthenticationService } from '../../_services/authentication.service';

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
  constructor(private dataService: DataService, private auth: AuthenticationService) {
    const info = JSON.parse(localStorage.getItem('currentUser'))
    this.name = info.full_name || 'User';
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
    this.dataService.changeMessage(this.message)
  }
  expandProfile() {
    this.showPanel = 'show';
  }
  signOut() {
    this.auth.logout();
  }
  close($event) {
    console.log("event is", $event)
    if ($event == null) {
      this.showPanel = 'hide';
    }
  }
}

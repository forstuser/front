import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  leftmenuItems: any;
  admin_menu = [{
    'name': 'Dashboard',
    'icon': 'mdi-television',
    'link': 'home'
  }, {
    'name': 'New Jobs',
    'icon': 'mdi-briefcase-check',
    'link': 'new'
  },
  {
    'name': 'Progress Jobs',
    'icon': 'mdi-pause-circle',
    'link': 'underProgress'
  },
  {
    'name': 'Completed Jobs',
    'icon': 'mdi-checkbox-marked-circle',
    'link': 'completed'
  }]
  constructor() { }

  ngOnInit() {
    this.leftmenuItems = this.admin_menu;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  // superAdmin:id = 1
  // DataBaseManager:id = 2

leftPanelItems = [
  {
    'id': '1',
    'name': 'Dashboard',
    'icon': 'dashboard',
    'dropdownList': [
      {
        'd_name': '',
        'd_icon': ''
      },
      {
        'd_name': '',
        'd_icon': ''
      }
    ]
  },
  {
    'id': '1',
    'name': 'Customer Management',
    'icon': 'accessibility',
    'dropdownList' : [
      {
        'd_name': 'Customer Lists',
        'd_icon': 'view_list'
      },
      {
        'd_name': 'Customer Bills',
        'd_icon': 'exposure_plus_1'
      }
    ]
  },
  {
    'id': '1',
    'name': 'Customer Care Exec. Management',
    'icon': 'headset_mic',
    'dropdownList' : [
      {
        'd_name': 'Customer Care Executive Lists',
        'd_icon': 'view_list'
      },
      {
        'd_name': 'Add Customer Care Executive',
        'd_icon': 'exposure_plus_1'
      }
    ]
  }
];
  constructor() { }

  ngOnInit() {
  }

}

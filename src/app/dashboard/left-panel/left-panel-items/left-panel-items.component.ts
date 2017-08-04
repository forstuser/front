import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-panel-items',
  templateUrl: './left-panel-items.component.html',
  styleUrls: ['./left-panel-items.component.css']
})
export class LeftPanelItemsComponent implements OnInit {
  // superAdmin:id = 1
  // DataBaseManager:id = 2
  isIn = false;   // store state
leftPanelItems = [
  {
    'id': '1',
    'name': 'Dashboard',
    'icon': 'dashboard',
    'link': 'home',
    'handler': 'doNothing',
    'class': ''
  },
  {
    'id': '1',
    'name': 'User Management',
    'icon': 'accessibility',
    'link': '#',
    'class': 'menu-toggle',
    'handler': 'toggleState',
    'dropdownList' : [
      {
        'd_name': 'Add User',
        'd_icon': 'add_box',
        'd_link': 'AddUser'
      },
      {
        'd_name': 'Admin',
        'd_icon': 'build',
        'd_link': 'admin'
      },
      {
        'd_name': 'Customer',
        'd_icon': 'account_box',
        'd_link': 'customer'
      },
      {
        'd_name': 'Customer Executive',
        'd_icon': 'headset_mic',
        'd_link': 'ce'
      },
       {
        'd_name': 'Quality Executive',
        'd_icon': 'insert_emoticon',
        'd_link': 'qe'
      }
    ]
  },
  {
    'id': '1',
    'name': 'Category Management',
    'icon': 'loyalty',
    'link': 'category',
    'class': '',
    'handler': 'doNothing'
  },
  {
    'id': '1',
    'name': 'Seller Management',
    'icon': 'shop_two',
    'link': 'seller-management',
    'handler': 'doNothing',
    'class': ''
  },
    {
    'id': '1',
    'name': 'Post Billing Service Provider Management',
    'icon': 'receipt',
    'link': 'post-bill-management',
    'handler': 'doNothing',
    'class': ''
  },
  {
    'id': '1',
    'name': 'Quick Action Service Provider management',
    'icon': 'fast_forward',
    'link': 'quick-action-management',
    'handler': 'doNothing',
    'class': ''
  }
];
  constructor() { }

  ngOnInit() {
  }
    toggleState() { // click handler
      console.log('inside toggle');
      const bool = this.isIn;
      this.isIn = bool === false ? true : false;
  }
  doNothing() {
    console.log('do nothing');
  }
}

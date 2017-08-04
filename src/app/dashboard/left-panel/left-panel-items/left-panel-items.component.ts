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
        'd_name': 'Customer Management',
        'd_icon': 'account_box'
      },
      {
        'd_name': 'CE Management',
        'd_icon': 'headset_mic'
      },
       {
        'd_name': 'QE Management',
        'd_icon': 'insert_emoticon'
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

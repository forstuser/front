import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-panel-items',
  templateUrl: './left-panel-items.component.html',
  styleUrls: ['./left-panel-items.component.css']
})
export class LeftPanelItemsComponent implements OnInit {
  // superAdmin:id = 1
  // DataBaseManager:id = 2

leftPanelItems = [
  {
    'id': '1',
    'name': 'Dashboard',
    'icon': 'dashboard',
    'link': 'home',
    'class': ''
  },
  {
    'id': '1',
    'name': 'User Management',
    'icon': 'accessibility',
    'link': 'user-management',
    'class': 'menu-toggle',
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
    'class': ''
  },
  {
    'id': '1',
    'name': 'Seller Management',
    'icon': 'shop_two',
    'link': 'seller-management',
    'class': ''
  },
    {
    'id': '1',
    'name': 'Post Billing Service Provider Management',
    'icon': 'receipt',
    'link': 'post-bill-management',
    'class': ''
  },
  {
    'id': '1',
    'name': 'Quick Action Service Provider management',
    'icon': 'fast_forward',
    'link': 'quick-action-management',
    'class': ''
  }
];
  constructor() { }

  ngOnInit() {
  }

}

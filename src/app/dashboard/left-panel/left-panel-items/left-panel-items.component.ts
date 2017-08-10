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
    'handler': 'doNothing',
    'class': '',
  },
  {
    'id': '1',
    'name': 'User Management',
    'icon': 'accessibility',
    'link': '#',
    'class': 'menu-toggle',
    'handler': 'toggleState',
    'addClass': 'none',
    'addSubClass': 'none',
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
    'icon': 'menu',
    'link': '#',
    'class': 'menu-toggle',
    'handler': 'toggleState',
    'addActive': 'none',
    'addClass': 'none',
    'addSubClass': 'none',
    'dropdownList' : [
      {
        'd_name': 'Main Category',
        'd_icon': 'looks_one',
        'd_link': 'mainCategory'
      },
      {
        'd_name': 'Category',
        'd_icon': 'looks_two',
        'd_link': 'category'
      },
      {
        'd_name': 'SubCategory',
        'd_icon': 'looks_3',
        'd_link': 'subCategory'
      }
    ]
  },
    {
    'id': '1',
    'name': 'Brand Management',
    'icon': 'loyalty',
    'link': '#',
    'class': 'menu-toggle',
    'handler': 'toggleState',
    'addActive': 'none',
    'addClass': 'none',
    'addSubClass': 'none',
    'dropdownList' : [
      {
        'd_name': 'Add Brand',
        'd_icon': 'looks_one',
        'd_link': 'addBrand'
      },
      {
        'd_name': 'Brand List',
        'd_icon': 'looks_two',
        'd_link': 'brandList'
      }
    ]
    },
  {
    'id': '1',
    'name': 'Seller Management',
    'icon': 'shop_two',
    'link': '#',
    'class': 'menu-toggle',
    'handler': 'toggleState',
    'addActive': 'none',
    'addClass': 'none',
    'addSubClass': 'none',
    'dropdownList' : [
      {
        'd_name': 'Add Offline Seller',
        'd_icon': 'looks_one',
        'd_link': 'addOffline'
      },
      {
        'd_name': 'Offline Seller List',
        'd_icon': 'looks_two',
        'd_link': 'offlineList'
      },
      {
        'd_name': 'Add Online Seller',
        'd_icon': 'looks_one',
        'd_link': 'addOnline'
      },
      {
        'd_name': 'Online Seller List',
        'd_icon': 'looks_two',
        'd_link': 'onlineList'
      }
    ]
    },
    {
    'id': '1',
    'name': 'List Management',
    'icon': 'menu',
    'link': '#',
    'class': 'menu-toggle',
    'handler': 'toggleState',
    'addActive': 'none',
    'addClass': 'none',
    'addSubClass': 'none',
    'dropdownList' : [
      {
        'd_name': 'Exclusions',
        'd_icon': 'looks_one',
        'd_link': 'exclusions'
      },
      {
        'd_name': 'Inclusions',
        'd_icon': 'looks_two',
        'd_link': 'inclusions'
      }
    ]
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
  },
    {
    'id': '1',
    'name': 'Color',
    'icon': 'format_color_fill',
    'link': 'color',
    'handler': 'doNothing',
    'class': '',
  },
];
  constructor() { }

  ngOnInit() {
  }
    toggleState(e: any) {
      console.log(e);
      if (e.addClass === 'none') {
        e.addClass = 'toggled';
        e.addSubClass = 'display';
      } else {
         e.addClass = 'none';
         e.addSubClass = 'none';
      }

     // this.isIn = bool === false ? true : false;
  }
  doNothing() {
    console.log('do nothing');
  }
}

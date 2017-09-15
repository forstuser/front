import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-panel-items',
  templateUrl: './left-panel-items.component.html',
  styleUrls: ['./left-panel-items.component.css']
})
export class LeftPanelItemsComponent implements OnInit {
  userType: any;
  LeftPanelItems: any;
  superAdmin = [
    {
      'name': 'Dashboard',
      'icon': 'dashboard',
      'link': 'home',
      'handler': 'doNothing',
      'class': '',
    },
    {
      'name': 'Job Management',
      'icon': 'work',
      'link': '*',
      'class': 'menu-toggle',
      'handler': 'toggleState',
      'addClass': 'none',
      'addSubClass': 'none',
      'dropdownList': [
        {
          'd_name': 'New',
          'd_icon': 'arrow_downward',
          'd_link': 'new'
        },
        {
          'd_name': 'Under Progress',
          'd_icon': 'more_horiz',
          'd_link': 'underProgress'
        },
        {
          'd_name': 'Completed',
          'd_icon': 'check',
          'd_link': 'completed'
        },
        {
          'd_name': 'Discarded',
          'd_icon': 'clear',
          'd_link': 'discarded'
        }
      ]
    },
    {
      'name': 'User Management',
      'icon': 'accessibility',
      'link': '#',
      'class': 'menu-toggle',
      'handler': 'toggleState',
      'addClass': 'none',
      'addSubClass': 'none',
      'dropdownList': [
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
      'name': 'Category Management',
      'icon': 'menu',
      'link': '#',
      'class': 'menu-toggle',
      'handler': 'toggleState',
      'addActive': 'none',
      'addClass': 'none',
      'addSubClass': 'none',
      'dropdownList': [
        {
          'd_name': 'Main Category',
          'd_icon': 'looks_one',
          'd_link': 'mainCategory'
        },
        {
          'd_name': 'Category',
          'd_icon': 'looks_two',
          'd_link': 'category'
        }
        // {
        //   'd_name': 'SubCategory',
        //   'd_icon': 'looks_3',
        //   'd_link': 'subCategory'
        // }
      ]
    },
    {
      'name': 'Brand Management',
      'icon': 'loyalty',
      'link': '#',
      'class': 'menu-toggle',
      'handler': 'toggleState',
      'addActive': 'none',
      'addClass': 'none',
      'addSubClass': 'none',
      'dropdownList': [
        {
          'd_name': 'Add Brand',
          'd_icon': 'add',
          'd_link': 'addBrand'
        },
        {
          'd_name': 'Brand List',
          'd_icon': 'format_list_numbered',
          'd_link': 'brandList'
        }
      ]
    },
    {
      'name': 'Seller Management',
      'icon': 'shop_two',
      'link': '#',
      'class': 'menu-toggle',
      'handler': 'toggleState',
      'addActive': 'none',
      'addClass': 'none',
      'addSubClass': 'none',
      'dropdownList': [
        {
          'd_name': 'Add Offline Seller',
          'd_icon': 'add',
          'd_link': 'addOffline'
        },
        {
          'd_name': 'Offline Seller List',
          'd_icon': 'format_list_numbered',
          'd_link': 'offlineList'
        },
        {
          'd_name': 'Add Online Seller',
          'd_icon': 'add',
          'd_link': 'addOnline'
        },
        {
          'd_name': 'Online Seller List',
          'd_icon': 'format_list_numbered',
          'd_link': 'onlineList'
        }
      ]
    },
    {
      'name': 'Inclusion / Exclusion Management',
      'icon': 'menu',
      'link': '#',
      'class': 'menu-toggle',
      'handler': 'toggleState',
      'addActive': 'none',
      'addClass': 'none',
      'addSubClass': 'none',
      'dropdownList': [
        {
          'd_name': 'Exclusions',
          'd_icon': 'call_made',
          'd_link': 'exclusions'
        },
        {
          'd_name': 'Inclusions',
          'd_icon': 'call_received',
          'd_link': 'inclusions'
        }
      ]
    },
    {
      'name': 'Authorized Service Center Management',
      'icon': 'receipt',
      'link': '#',
      'class': 'menu-toggle',
      'handler': 'toggleState',
      'addActive': 'none',
      'addClass': 'none',
      'addSubClass': 'none',
      'dropdownList': [
        {
          'd_name': 'Add Service Center',
          'd_icon': 'add',
          'd_link': 'addServiceCenter'
        },
        {
          'd_name': 'Service Center List',
          'd_icon': 'format_list_numbered',
          'd_link': 'serviceCenterList'
        }
      ]
    },
    {
      'name': 'Color',
      'icon': 'format_color_fill',
      'link': 'color',
      'handler': 'doNothing',
      'class': '',
    },
  ];





  admin = [
    {
      'name': 'Dashboard',
      'icon': 'dashboard',
      'link': 'home',
      'handler': 'doNothing',
      'class': '',
    },
    {
      'name': 'Job Management',
      'icon': 'work',
      'link': '*',
      'class': 'menu-toggle',
      'handler': 'toggleState',
      'addClass': 'none',
      'addSubClass': 'none',
      'dropdownList': [
        {
          'd_name': 'New',
          'd_icon': 'arrow_downward',
          'd_link': 'new'
        },
        {
          'd_name': 'Under Progress',
          'd_icon': 'more_horiz',
          'd_link': 'underProgress'
        },
        {
          'd_name': 'Completed',
          'd_icon': 'check',
          'd_link': 'completed'
        },
        {
          'd_name': 'Discarded',
          'd_icon': 'clear',
          'd_link': 'discarded'
        }
      ]
    },

    {
      'name': 'Category Management',
      'icon': 'menu',
      'link': '#',
      'class': 'menu-toggle',
      'handler': 'toggleState',
      'addActive': 'none',
      'addClass': 'none',
      'addSubClass': 'none',
      'dropdownList': [
        {
          'd_name': 'Main Category',
          'd_icon': 'looks_one',
          'd_link': 'mainCategory'
        },
        {
          'd_name': 'Category',
          'd_icon': 'looks_two',
          'd_link': 'category'
        }
        // {
        //   'd_name': 'SubCategory',
        //   'd_icon': 'looks_3',
        //   'd_link': 'subCategory'
        // }
      ]
    },
    {
      'name': 'Brand Management',
      'icon': 'loyalty',
      'link': '#',
      'class': 'menu-toggle',
      'handler': 'toggleState',
      'addActive': 'none',
      'addClass': 'none',
      'addSubClass': 'none',
      'dropdownList': [
        {
          'd_name': 'Add Brand',
          'd_icon': 'add',
          'd_link': 'addBrand'
        },
        {
          'd_name': 'Brand List',
          'd_icon': 'format_list_numbered',
          'd_link': 'brandList'
        }
      ]
    },
    {
      'name': 'Seller Management',
      'icon': 'shop_two',
      'link': '#',
      'class': 'menu-toggle',
      'handler': 'toggleState',
      'addActive': 'none',
      'addClass': 'none',
      'addSubClass': 'none',
      'dropdownList': [
        {
          'd_name': 'Add Offline Seller',
          'd_icon': 'add',
          'd_link': 'addOffline'
        },
        {
          'd_name': 'Offline Seller List',
          'd_icon': 'format_list_numbered',
          'd_link': 'offlineList'
        },
        {
          'd_name': 'Add Online Seller',
          'd_icon': 'add',
          'd_link': 'addOnline'
        },
        {
          'd_name': 'Online Seller List',
          'd_icon': 'format_list_numbered',
          'd_link': 'onlineList'
        }
      ]
    },
    {
      'name': 'Inclusion / Exclusion Management',
      'icon': 'menu',
      'link': '#',
      'class': 'menu-toggle',
      'handler': 'toggleState',
      'addActive': 'none',
      'addClass': 'none',
      'addSubClass': 'none',
      'dropdownList': [
        {
          'd_name': 'Exclusions',
          'd_icon': 'call_made',
          'd_link': 'exclusions'
        },
        {
          'd_name': 'Inclusions',
          'd_icon': 'call_received',
          'd_link': 'inclusions'
        }
      ]
    },
    {
      'name': 'Authorized Service Center Management',
      'icon': 'receipt',
      'link': '#',
      'class': 'menu-toggle',
      'handler': 'toggleState',
      'addActive': 'none',
      'addClass': 'none',
      'addSubClass': 'none',
      'dropdownList': [
        {
          'd_name': 'Add Service Center',
          'd_icon': 'add',
          'd_link': 'addServiceCenter'
        },
        {
          'd_name': 'Service Center List',
          'd_icon': 'format_list_numbered',
          'd_link': 'serviceCenterList'
        }
      ]
    },
    {
      'name': 'Color',
      'icon': 'format_color_fill',
      'link': 'color',
      'handler': 'doNothing',
      'class': '',
    },
  ];


  ce_qe = [
    {
      'name': 'Dashboard',
      'icon': 'dashboard',
      'link': 'home',
      'handler': 'doNothing',
      'class': '',
    },
    {
      'name': 'Job Management',
      'icon': 'work',
      'link': '*',
      'class': 'menu-toggle',
      'handler': 'toggleState',
      'addClass': 'none',
      'addSubClass': 'none',
      'dropdownList': [
        {
          'd_name': 'New',
          'd_icon': 'arrow_downward',
          'd_link': 'new'
        },

        {
          'd_name': 'Completed',
          'd_icon': 'check',
          'd_link': 'completed'
        }
      ]
    },
  ];

  constructor() {
    const info = JSON.parse(localStorage.getItem('currentUser'))
    // console.log("info", info)
    this.userType = info.UserType;
    // console.log("userType", this.userType)

    if (this.userType === '1') {
      this.LeftPanelItems = this.superAdmin;
      // console.log(this.superAdmin)
    }

    else if (this.userType === '2') {
      this.LeftPanelItems = this.admin;
      // console.log(this.admin)

    }

    else if (this.userType === '3' || this.userType === '4') {
      this.LeftPanelItems = this.ce_qe;
    }
  }

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
    // console.log('do nothing');
  }
}

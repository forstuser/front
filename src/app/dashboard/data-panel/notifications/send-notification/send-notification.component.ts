import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../../_services/user.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.css']
})

export class SendNotificationComponent implements OnInit {

  assignForm: FormGroup;
  notification: any;
  userArray: any[] = [];
  checkAll: boolean = false;
  offset = 0;
  leftFlag: boolean = true;
  rightFlag: boolean = false;
  noData: boolean = false;
  start_date: any = '';
  imageUrl: string = '../../../assets/images/loader.gif';
  end_date: any = '';
  loader: boolean = false;
  brands: any;
  category: any;
  request: boolean = false;
  category_id: any = '';
  brand_id: any = '';
  constructor(private userService: UserService, private fb: FormBuilder) {
    this.assignForm = this.fb.group({
      'description': '',
      'image_url': '',
      'link': '',
      'title': ['', Validators.required],
      'notification_type': ['', Validators.required],
      'user_id': ''
    });
  }

  ngOnInit() {
    this.activeBrandList();
    this.getCategoryList();
    this.userService.getUserListNotification(5, this.offset)
      .subscribe(res => {
        console.log(res)
        this.notification = res.data;
      }, (error => {
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }))
  }
  // get ist of brands
  activeBrandList() {
    this.userService.getBrandListByStatus(1)
      .subscribe(brandList => {
        this.brands = brandList;
        console.log(this.brands);
      })
  }
  // get list of category
  getCategoryList() {
    this.userService.getCategoryList(2) // 2 for category refer to api doc
      .subscribe(res => {
        this.category = res;
        console.log(this.category);
      });
  }

  // brand list by category
  getBrandListByCategory(catID: number) {
    this.category_id = catID;
    this.request = true;
    this.userService.getBrandListByCategory(catID)
      .subscribe(brandList => {
        this.request = false;
        this.brands = brandList;
        console.log(this.brands, "brands");
      }, error => {
        console.log(error);
        this.request = false;
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      });
  }

  getBrandId(brandId: number) {
    this.brand_id = brandId;
  }
  clicked(event, id) {
    console.log(event, id, "filters")
    if (this.userArray.includes(id)) {
      var index = this.userArray.indexOf(id);
      this.userArray.splice(index, 1);
    } else {
      this.userArray.push(id);
    }
    console.log(this.userArray);
  }

  addNotification(form) {
    form['user_id'] = this.userArray;
    form['start_date'] = this.start_date;
    form['end_date'] = this.end_date;
    form['category_id'] = this.category_id;
    form['brand_id'] = this.brand_id;
    console.log(form, "notify")
    this.userService.sendNotification(form)
      .subscribe(res => {
        console.log(res, "resposnse");
        alert("Notification Sent Successfully");
      }, (error => {
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }))
  }

  mobileChange(event) {
    console.log("event", event);
    this.request = true;
    if (event == '') {
      this.request = false;
    }
    this.userService.searchMobile(event, 5)
      .subscribe(res => {
        if (event) {
          this.request = false;
          this.notification = res.data;
          console.log(res, "response")
        }
      }, (error => {
        this.request = false;
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }))
  }
  selectAll() {
    // this.checkAll = true;
    const bool = this.checkAll;
    this.checkAll = bool === false ? true : false;
  }
  // function for pagination
  left() {
    this.leftFlag = true;
    this.rightFlag = false;
    this.noData = false;
    if (this.offset > 1) {
      this.offset = this.offset - 100;
      this.leftFlag = false;
    }
    this.userService.getUserListNotification(5, this.offset)
      .subscribe(res => {
        console.log(res);
        this.rightFlag = false;
        this.notification = res.data;
      }, (error => {
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }))
  }

  right() {
    this.noData = false;
    this.leftFlag = false;
    this.offset = this.offset + 100;
    this.userService.getUserListNotification(5, this.offset)
      .subscribe(res => {
        console.log(res);
        this.notification = res.data;
        if (res.data.length == 0) {
          this.rightFlag = true;
          this.noData = true;
        }
      }, (error => {
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }))
  }
  getStartDate(e) {
    console.log(e);
    this.start_date = e;
  }
  getEndDate(e) {
    this.end_date = e;
  }
  getUserDate() {
    this.loader = true;
    this.userService.getUserListbyDate(this.category_id, this.brand_id, this.start_date, this.end_date)
      .subscribe(res => {
        console.log(res);
        this.loader = false;
        this.notification = res.data;
      }, error => {
        this.loader = false;
        console.log(error);
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      })
  }

}

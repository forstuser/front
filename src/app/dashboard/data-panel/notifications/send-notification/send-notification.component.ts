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
  categoryArray: any[] = [];
  checkAll: boolean = false;
  offset = 0;
  leftFlag: boolean = true;
  rightFlag: boolean = false;
  noData: boolean = false;
  start_date: any;
  end_date: any;
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
    this.userService.getUserListNotification(5, this.offset)
      .subscribe(res => {
        console.log(res)
        this.notification = res.data;
      }, (error => {
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }))
  }

  clicked(event, id) {
    console.log(event, id, "filters")
    if (this.categoryArray.includes(id)) {
      var index = this.categoryArray.indexOf(id);
      this.categoryArray.splice(index, 1);
    } else {
      this.categoryArray.push(id);
    }
    console.log(this.categoryArray);
  }

  addNotification(form) {
    form['user_id'] = this.categoryArray;
    form['start_date'] = this.start_date;
    form['end_date'] = this.end_date;
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
    this.userService.searchMobile(event, 5)
      .subscribe(res => {
        if (event) {
          this.notification = res.data;
          console.log(res, "response")
        }
      }, (error => {
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
    this.userService.getUserListbyDate(this.start_date, this.end_date)
      .subscribe(res => {
        console.log(res);
        this.notification = res.data;
      }, error => {
        console.log(error);
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      })
  }

}

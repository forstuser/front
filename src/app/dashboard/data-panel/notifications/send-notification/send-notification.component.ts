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
    this.userService.getUserListNotification(5)
      .subscribe(res => {
        console.log(res)
        this.notification = res.data;
      })
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
    console.log(form, "notify")
    this.userService.sendNotification(form)
      .subscribe(res => {
        console.log(res, "resposnse")
      })
  }

  mobileChange(event) {
    console.log("event", event);
    this.userService.searchMobile(event, 5)
      .subscribe(res => {
        if (event) {
          this.notification = res.data;
          console.log(res, "response")
        }
      })
  }

}

import { User } from './../../../../_models/user';
import { UserService } from './../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserList('2') // 2 for admin refer to api doc
    .subscribe(users => {
      this.users = users;
      console.log(users);
    });
  }

}

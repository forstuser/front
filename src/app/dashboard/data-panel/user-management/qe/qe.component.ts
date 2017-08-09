import { User } from './../../../../_models/user';
import { UserService } from './../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qe',
  templateUrl: './qe.component.html',
  styleUrls: ['./qe.component.css']
})
export class QeComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserList('5') // 5 for Consumer refer to api doc
    .subscribe(users => {
      this.users = users;
      console.log(users);
    });
  }
  editUser(item: any) {
   console.log(item);
  }
  deleteUser(item: any) {

  }
}

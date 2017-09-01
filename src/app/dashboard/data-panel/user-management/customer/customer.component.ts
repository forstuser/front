import { UserType } from './../../../../_models/usertype';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from './../../../../_models/user';
import { UserService } from './../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  users: User;
  dropdownUser: UserType;
  item: Object = {}; // object for single user
  del: any = {};
  showDialog = false;
  name: String = '';
  editUserForm: FormGroup;
  statusCode: Number;
  prev:number=0;
  next:number=10;
  leftFlag:boolean= true;
  rightFlag:boolean = false;
  noData:boolean = false;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    // get list of ce
    this.userService.getConsumerList(this.prev,this.next) 
      .subscribe(users => {
        this.users = users;
        console.log(users);
      });
    // get dropdown list
    this.userService.getAllUser()
      .subscribe(users => {
        this.dropdownUser = users;
        console.log(users);
      });
  }
  deleteUser(user: any) {
    console.log(user);
    this.del = { 'ID': user.ID };
    this.userService.deleteUser(this.del)
      .subscribe(res => {
        console.log(res);
        alert('Deleted');
        this.userService.getConsumerList(this.prev,this.next) 
          .subscribe(users => {
            this.users = users;
            // console.log(users);
          });
      });
  }
    // function for pagination
    left(){
      this.noData = false;
      this.prev = this.prev-10;
      if(this.prev ==0){
        this.leftFlag = true;
      }
      this.userService.getConsumerList(this.prev,this.next)
      .subscribe( users => {
        console.log(users.statusCode)
        if(users.statusCode==100){
          this.rightFlag = false;
        }
        this.users = users;
        console.log(this.users);
      });
    }
    right(){
      this.noData = false;
      this.leftFlag = false;
      this.prev = this.prev+10;
      console.log(this.prev);
      console.log(this.next);
      this.userService.getConsumerList(this.prev,this.next)
      .subscribe( users => {
        console.log(users.statusCode)
        if(users.statusCode==105){
          this.rightFlag = true;
          this.noData = true;
        }
        this.users = users;
        console.log(this.users);
      });
    }
}
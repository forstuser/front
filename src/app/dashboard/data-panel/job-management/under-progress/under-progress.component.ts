import { Bill } from './../../../../_models/billList.interface';
import { UserService } from './../../../../_services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './../../../../_models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-under-progress',
  templateUrl: './under-progress.component.html',
  styleUrls: ['./under-progress.component.css']
})
export class UnderProgressComponent implements OnInit {
  ceUsers: User;
  qeUsers: User;
  bills: Bill;
  assignForm: FormGroup;
  assignQeForm: FormGroup;
  discardForm:FormGroup;
  showDialog:boolean = false;
  showQeDialog:boolean = false;
  discardDialog:boolean = false;
  item: Object = {}; // object for single user
  statusCode: Number;
  prev:number=0;
  next:number=10;
  leftFlag:boolean= true;
  rightFlag:boolean = false;
  noData:boolean = false;
  constructor(private userservice: UserService, private fb: FormBuilder) {
    this.assignForm = this.fb.group({
      'UID': ['', Validators.required],
      'Comments': '',
      'BID': ''
    });
    this.assignQeForm = this.fb.group({
      'UID': ['', Validators.required],
      // 'Comments' : '',
      'BID': ''
    });
    this.discardForm = this.fb.group({
      'Comments': ['', Validators.required],
      'BID': '',
      'UID':''
    });
  }

  ngOnInit() {
    this.userservice.getAdminBillList(8,this.prev,this.next) // incomplete = 6 refer api doc
      .subscribe(bills => {
        this.bills = bills;
        console.log(this.bills);
      });
    // get list of ce
    this.userservice.getUserList('3') // 3 for ce refer to api doc
      .subscribe(users => {
        this.ceUsers = users;
        console.log(users);
      });
    // get list of qe
    this.userservice.getUserList('4') // 3 for qe refer to api doc
      .subscribe(users => {
        this.qeUsers = users;
        console.log(users);
      });
  }
    // function for pagination
    left(){
      this.noData = false;
      this.prev = this.prev-10;
      if(this.prev ==0){
        this.leftFlag = true;
      }
      this.userservice.getAdminBillList(8,this.prev,this.next)
      .subscribe( bills => {
        console.log(bills.statusCode)
        if(bills.statusCode==100){
          this.rightFlag = false;
        }
        this.bills = bills;
        console.log(this.bills);
      });
    }
    right(){
      this.noData = false;
      this.leftFlag = false;
      this.prev = this.prev+10;
      console.log(this.prev);
      console.log(this.next);
      this.userservice.getAdminBillList(8,this.prev,this.next)
      .subscribe( bills => {
        console.log(bills.statusCode)
        if(bills.statusCode==105){
          this.rightFlag = true;
          this.noData = true;
        }
        this.bills = bills;
        console.log(this.bills);
      });
    }
  // passs current user as argument and open the popup
  openModel(item: any) {
    console.log(item);
    this.showDialog = true; // for show dialog
    this.assignForm.setValue({
      BID: item.BID,
      UID: '',
      Comments: ''
    });
  }
  assignBillCE(item: any) {
    console.log(item);
    this.userservice.assignTaskCE(item)
      .subscribe(res => {
        console.log(res);
        if (res.statusCode == 100) {
          alert('assign successfull');
          this.showDialog = false;
          this.userservice.getAdminBillList(8,this.prev,this.next) // incomplete = 6 refer api doc
            .subscribe(bill => {
              this.bills = bill;
              console.log(this.bills);
            });
        }
      });
  }
  // open model for qe assign
  assignQE(item) {
    console.log(item);
    this.showQeDialog = true; // for shoe qe popup
    this.assignQeForm.setValue({
      BID: item.BID,
      UID: '',
      // Comments: ''
    });
  }
  // assign bill to QE
  assignBillQE(item: any) {
    console.log(item);
    this.userservice.assignTaskQE(item)
      .subscribe(res => {
        console.log(res);
        alert('assign successfull');
        this.showQeDialog = false;
        this.userservice.getAdminBillList(8,this.prev,this.next) // incomplete = 6 refer api doc
          .subscribe(bill => {
            this.bills = bill;
            console.log(this.bills);
          });
      });
  }
  // opn model for discard bills
  discard(item:any){
    console.log(item);
    this.discardDialog = true;
    this.discardForm.setValue({
      BID: item.BID,
      UID: item.UID,
      Comments:'',
    });
  } 
  discardBill(item:any){
    console.log(item);
    this.userservice.discardConsumerBill(item)
      .subscribe(res=>{
        console.log(res);
        alert("Bill Discarded");
        this.discardDialog = false;
        this.userservice.getAdminBillList(8,this.prev,this.next) // incomplete = 6 refer api doc
        .subscribe(bill => {
          this.bills = bill;
          console.log(this.bills);
        });
      })
  }
}

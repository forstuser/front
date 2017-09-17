import { NewList } from './../../../../_models/billList.interface';
import { User } from './../../../../_models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  userType: String;
  users: User;
  billList: NewList;
  billId: number;
  assignForm: FormGroup;
  showDialog = false;
  showImageDialog = false;
  item: Object = {}; // object for single user
  statusCode: Number;
  prev: number = 0;
  next: number = 10;
  leftFlag: boolean = true;
  rightFlag: boolean = false;
  noData: boolean = false;
  imageArray: any[] = [];
  images: string[] = [];
  imageIndex: number = 0;
  discardForm: FormGroup;
  discardDialog: boolean = false;
  imagerotation: number = 0;
  discardImage: object;
  constructor(private userservice: UserService, private fb: FormBuilder) {
    // get userType from local Storage
    const info = JSON.parse(localStorage.getItem('currentUser'))
    this.userType = info.UserType;
    console.log("userType", this.userType)

    this.assignForm = this.fb.group({
      'UID': ['', Validators.required],
      'Comments': '',
      'BID': ''
    });
    this.discardForm = this.fb.group({
      'Comments': ['', Validators.required],
      'BID': ''
    });
  }

  ngOnInit() {

    // if userType is Admin/SuperAdmin get list of new bills
    if (this.userType === '1' || this.userType === '2') {
      this.userservice.getAdminBillList(4, this.prev, this.next) // new = 4 refer api doc
        .subscribe(bill => {
          this.billList = bill;
          console.log(this.billList);
        });
    }
    // if userType is CE get list of new bills
    else if (this.userType === '3') {
      this.userservice.getCEBillList(4, this.prev, this.next) // new = 4 refer api doc
        .subscribe(bill => {
          this.billList = bill;
          console.log(this.billList);
        });
    }
    // if userType is QE get list of new bills
    else if (this.userType === '4') {
      this.userservice.getQEBillList(4, this.prev, this.next) // new = 4 refer api doc
        .subscribe(bill => {
          this.billList = bill;
          console.log(this.billList);
        });
    }
    // get list of ce
    this.userservice.getUserList('3') // 3 for ce refer to api doc
      .subscribe(users => {
        this.users = users;
        console.log(users);
      });
  }
  // function for pagination
  left() {
    this.noData = false;
    this.prev = this.prev - 10;
    if (this.prev == 0) {
      this.leftFlag = true;
    }
    // if userType is Admin/SuperAdmin get list of new bills
    if (this.userType === '1' || this.userType === '2') {
      this.userservice.getAdminBillList(4, this.prev, this.next) // new = 4 refer api doc
        .subscribe(bill => {
          if (bill.statusCode == 100) {
            this.rightFlag = false;
          }
          this.billList = bill;
          console.log(this.billList);
        });
    }
    // if userType is CE get list of new bills
    else if (this.userType === '3') {
      this.userservice.getCEBillList(4, this.prev, this.next) // new = 4 refer api doc
        .subscribe(bill => {
          if (bill.statusCode == 100) {
            this.rightFlag = false;
          }
          this.billList = bill;
          console.log(this.billList);
        });
    }
    // if userType is QE get list of new bills
    else if (this.userType === '4') {
      this.userservice.getQEBillList(4, this.prev, this.next) // new = 4 refer api doc
        .subscribe(bill => {
          if (bill.statusCode == 100) {
            this.rightFlag = false;
          }
          this.billList = bill;
          console.log(this.billList);
        });
    }

  }
  right() {
    this.noData = false;
    this.leftFlag = false;
    this.prev = this.prev + 10;
    console.log(this.prev);
    console.log(this.next);
    // if userType is Admin/SuperAdmin get list of new bills
    if (this.userType === '1' || this.userType === '2') {
      this.userservice.getAdminBillList(4, this.prev, this.next) // new = 4 refer api doc
        .subscribe(bill => {
          if (bill.statusCode == 105) {
            this.rightFlag = true;
            this.noData = true;
          }
          this.billList = bill;
          console.log(this.billList);
        });
    }
    // if userType is CE get list of new bills
    else if (this.userType === '3') {
      this.userservice.getCEBillList(4, this.prev, this.next) // new = 4 refer api doc
        .subscribe(bill => {
          if (bill.statusCode == 105) {
            this.rightFlag = true;
            this.noData = true;
          }
          this.billList = bill;
          console.log(this.billList);
        });
    }
    // if userType is QE get list of new bills
    else if (this.userType === '4') {
      this.userservice.getQEBillList(4, this.prev, this.next) // new = 4 refer api doc
        .subscribe(bill => {
          if (bill.statusCode == 105) {
            this.rightFlag = true;
            this.noData = true;
          }
          this.billList = bill;
          console.log(this.billList);
        });
    }
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
  assignBill(item: any) {
    console.log(item);
    this.userservice.assignTaskCE(item)
      .subscribe(res => {
        console.log(res);
        alert('assign successfull');
        this.showDialog = false;
        this.userservice.getAdminBillList(4, this.prev, this.next) // new = 4 refer api doc
          .subscribe(bill => {
            this.billList = bill;
            console.log(this.billList);
          });
      });
  }
  // for view image
  openImageModel(req: any) {
    this.showImageDialog = true;
    console.log(req);
    this.billId = req.BID;
    this.images = [];
    this.imageArray = [];
    this.userservice.getConsumerBillByID(req.BID)
      .subscribe(res => {
        console.log(res,"image");
        this.imageArray = res.ImageList;
        // console.log(this.imageArray);
        for (let i of res.ImageList) {
          this.images.push('https://consumer.binbill.com/bills/' + i.ImageID + '/files')
        }
      })
    // this.discardBillImage(req.BID);
  }
  // prev image
  prevImage() {
    if (this.imageIndex > 0) {
      this.imageIndex = this.imageIndex - 1;
    }
    // console.log(this.imageIndex ,'prev')
  }
  // next image
  nextImage() {
    if (this.imageIndex < this.imageArray.length - 1) {
      this.imageIndex = this.imageIndex + 1;
      // console.log(this.imageIndex)
    }
    // console.log(this.imageIndex ,'next')
  }
  // rotete image
  rotate() {
    this.imagerotation = this.imagerotation + 90;
  }
  // opn model for discard bills
  discard(item: any) {
    console.log(item);
    this.discardDialog = true;
    this.discardForm.setValue({
      BID: item.BID,
      Comments: '',
    });
  }
  discardBill(item: any) {
    console.log(item);
    this.userservice.discardConsumerBill(item)
      .subscribe(res => {
        console.log(res);
        alert("Bill Discarded");
        this.discardDialog = false;
        this.userservice.getAdminBillList(4, this.prev, this.next) // incomplete = 6 refer api doc
          .subscribe(bill => {
            this.billList = bill;
            console.log(this.billList);
          });
      })
  }
  // discard bill image
  discardBillImage() {

    // console.log(this.imageIndex,"sas");
    const imageID = this.imageArray[this.imageIndex].ImageID;
    console.log(imageID)
    this.discardImage = {
      'BID': this.billId,
      'ImageID': imageID,
      'Comments': 'Image Discarded'
    }
    this.userservice.discardConsumerBillImage(this.discardImage)
      .subscribe(res => {
        console.log(res)
        alert('Image discarded');
        // this.showImageDialog = false;
        // if userType is Admin/SuperAdmin get list of new bills
        if (this.userType === '1' || this.userType === '2') {
          this.userservice.getAdminBillList(4, this.prev, this.next) // new = 4 refer api doc
            .subscribe(bill => {
              this.billList = bill;
              console.log(this.billList);
            });
        }
      })  
  }
}

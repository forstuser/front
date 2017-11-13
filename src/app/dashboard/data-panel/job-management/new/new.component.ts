import { appConfig } from './../../../../app.config';
import { NewList } from './../../../../_models/billList.interface';
import { User } from './../../../../_models/user';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { UserService } from './../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  userType: number;
  users: any;
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
  images: string[] = ['../../../assets/images/loader.gif'];
  imageIndex: number = 0;
  discardForm: FormGroup;
  discardDialog: boolean = false;
  imagerotation: number = 0;
  discardImage: object;
  loader: boolean = false;
  arrayLength: number;
  imageUrl: string = appConfig.apiUrl;
  constructor(private userservice: UserService, private fb: FormBuilder) {
    // get userType from local Storage
    const info = JSON.parse(localStorage.getItem('currentUser'))
    this.userType = info.role_type;
    // console.log("userType", this.userType)

    this.assignForm = this.fb.group({
      'UID': ['', Validators.required],
      'comments': '',
      'BID': ''
    });
    this.discardForm = this.fb.group({
      'id': '',
      'comments': ['', Validators.required]
    });
  }

  ngOnInit() {

    // if userType is Admin/SuperAdmin get list of new bills
    if (this.userType === 1 || this.userType === 2) {
      this.getCEList();
      this.userservice.getAdminJobList(4) // new = 4 refer api doc
        .subscribe(bill => {
          this.billList = bill;
          console.log(this.billList);
        });
    }


    // if userType is CE get list of new bills
    else if (this.userType === 4) {
      this.userservice.getCEJobList(4) // new = 4 refer api doc // 8 for under progress
        .subscribe(bill => {
          this.billList = bill;
          console.log(this.billList);
        });
    }

    // if userType is QE get list of new bills
    else if (this.userType === 3) {
      this.userservice.getQEBillList(4, this.prev, this.next) // new = 4 refer api doc
        .subscribe(bill => {
          this.billList = bill;
          console.log(this.billList);
        });
    }
  }
  // function for pagination
  left() {
    this.noData = false;
    this.prev = this.prev - 10;
    if (this.prev == 0) {
      this.leftFlag = true;
    }
    // if userType is Admin/SuperAdmin get list of new bills
    if (this.userType === 1 || this.userType === 2) {
      this.userservice.getAdminJobList(4) // new = 4 refer api doc
        .subscribe(bill => {
          if (bill.statusCode == 100) {
            this.rightFlag = false;
          }
          this.billList = bill;
          console.log(this.billList);
        });
    }
    // if userType is CE get list of new bills
    else if (this.userType === 3) {
      this.userservice.getCEJobList(4) // new = 4 refer api doc
        .subscribe(bill => {
          if (bill.statusCode == 100) {
            this.rightFlag = false;
          }
          this.billList = bill;
          console.log(this.billList);
        });
    }
    // if userType is QE get list of new bills
    else if (this.userType === 4) {
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
    if (this.userType === 1 || this.userType === 2) {
      this.userservice.getAdminJobList(4) // new = 4 refer api doc
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
    else if (this.userType === 3) {
      this.userservice.getCEJobList(4) // new = 4 refer api doc
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
    else if (this.userType === 4) {
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
      BID: item.id,
      UID: '',
      comments: ''
    });
  }
  assignBill(item: any) {
    console.log(item);
    this.userservice.assignJobCE(item)
      .subscribe(res => {
        console.log(res);
        alert('assign successfull');
        this.showDialog = false;
        this.userservice.getAdminJobList(4) // new = 4 refer api doc
          .subscribe(bill => {
            this.billList = bill;
            console.log(this.billList);
          });
      });
  }
  // for view image
  openImageModel(req: any) {
    this.imageIndex = 0;
    this.loader = true;
    this.showImageDialog = true;
    // console.log(req, "image req");
    this.billId = req.BID;
    this.images = [];
    this.imageArray = [];
    this.userservice.getJobByID(req.id)
      .subscribe(res => {
        // console.log(res, "image");
        this.imageArray = res.data.copies;
        console.log(this.imageArray);
        console.log(this.imageArray.length, "length of array");
        this.arrayLength = this.imageArray.length;
        for (let i of this.imageArray) {
          this.images.push(this.imageUrl + 'api/' + i.copyUrl)
        }
        console.log(this.images);
        this.loader = false;
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

  // get list of ce users 
  getCEList() {
    this.userservice.getUserList(4) // 4 for ce refer to api doc
      .subscribe(users => {
        this.users = users;
        // console.log(users,"users");
      });
  }
  // opn model for discard bills
  discard(item: any) {
    console.log(item);
    this.discardDialog = true;
    this.discardForm.setValue({
      id: item.id,
      comments: '',
    });
  }
  discardBill(item: any) {
    console.log(item);
    this.userservice.discardConsumerJOB(item)
      .subscribe(res => {
        console.log(res);
        alert("Bill Discarded");
        this.discardDialog = false;
        this.userservice.getAdminJobList(4) // new = 4 refer api doc
          .subscribe(bill => {
            this.billList = bill;
            console.log(this.billList);
          });
      }, (error) => {
        console.log(error);
      })
  }

  // discard bill image
  commentBoxData(comment: string) {
    // console.log(form.value)
    const imageID = this.imageArray[this.imageIndex].ImageID;
    this.discardImage = {
      'BID': this.billId,
      'ImageID': imageID,
      'Comments': comment
    }
    console.log(this.discardImage)
    this.userservice.discardConsumerBillImage(this.discardImage)
      .subscribe(res => {
        console.log(res)
        alert('Image discarded');
        // this.showImageDialog = false;
        // if userType is Admin/SuperAdmin get list of new bills
        if (this.userType === 1 || this.userType === 2) {
          this.userservice.getAdminJobList(4) // new = 4 refer api doc
            .subscribe(bill => {
              this.billList = bill;
              console.log(this.billList);
            });
        }
      })
  }
}

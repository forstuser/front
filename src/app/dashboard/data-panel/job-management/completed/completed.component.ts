import { appConfig } from './../../../../app.config';
import { Bill } from './../../../../_models/billList.interface';
import { UserService } from './../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  imageUrl: string = appConfig.apiUrl;
  showImageDialog = false;
  billId: number;
  billList: Bill;
  userType: Number;
  prev: number = 0;
  next: number = 10;
  leftFlag: boolean = true;
  rightFlag: boolean = false;
  noData: boolean = false;
  images: string[] = ['../../../assets/images/loader.gif'];
  imageArray: any[] = [];
  imageIndex: number = 0;
  imagerotation: number = 0;
  loader: boolean = false;
  arrayLength: number;
  userId:any;
  constructor(private userservice: UserService) {
    // get userType from local Storage
    const info = JSON.parse(localStorage.getItem('currentUser'))
    this.userType = info.role_type;
    this.userId=info.id;
    // console.log("userType", this.userType)
  }

  ngOnInit() {
    // if userType is Admin/SuperAdmin get list of new bills
    if (this.userType === 1 || this.userType === 2) {
      this.userservice.getAdminJobList(5) // completed = 5 refer api doc
        .subscribe(bill => {
          this.billList = bill;
          console.log(this.billList);
        });
    }
    // if userType is CE get list of new bills
    else if (this.userType === 4) {
      this.userservice.getCEJobList(5,this.userId) // completed = 5 refer api doc
        .subscribe(bill => {
          this.billList = bill;
          console.log(this.billList);
        });
    }
    // if userType is QE get list of new bills
    else if (this.userType === 3) {
      this.userservice.getQEJobList(5, this.userId) // completed = 5  refer api doc
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
      this.userservice.getAdminJobList(5) // completed = 5 refer api doc
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
      this.userservice.getCEJobList(5,this.userId) // completed = 5 refer api doc
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
      this.userservice.getQEJobList(5, this.userId) // completed = 5  refer api doc
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
      this.userservice.getAdminJobList(5) // completed = 5 refer api doc
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
      this.userservice.getCEJobList(5,this.userId) // completed = 5 refer api doc
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
      this.userservice.getQEJobList(5, this.userId) // completed = 5  refer api doc
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
  // for view image
  openImageModel(req: any) {
    this.images = [];
    this.imageIndex = 0;
    this.showImageDialog = true;
    this.loader = true;
    console.log(req,"reqqq");
    this.billId = req.BID;
    this.images = [];
    this.imageArray = [];
    this.userservice.getJobByID(req.id)
      .subscribe(res => {
        console.log(res, "images");
        this.imageArray = res.data.copies;
        console.log(this.imageArray);
        console.log(this.imageArray.length, "length of array");
        this.arrayLength = this.imageArray.length;
        for (let i of this.imageArray) {
          this.images.push(this.imageUrl + 'api/' + i.copyUrl)
        }
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
}

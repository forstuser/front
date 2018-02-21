import { UserType } from './../../../../_models/usertype';
import { appConfig } from './../../../../app.config';
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
  imageLink: String = appConfig.imageUrl;
  ceUsers: any;
  qeUsers: any;
  bills: Bill;
  role_type: number;
  assignForm: FormGroup;
  assignQeForm: FormGroup;
  discardForm: FormGroup;
  showDialog: boolean = false;
  showQeDialog: boolean = false;
  discardDialog: boolean = false;
  item: Object = {}; // object for single user
  statusCode: Number;
  offset = 0;
  leftFlag: boolean = true;
  rightFlag: boolean = false;
  noData: boolean = false;
  userType: Number;
  showImageDialog = false;
  jobId: number;
  imageArray: any[] = [];
  images: string[] = [];
  imagerotation: number = 0;
  imageIndex: number = 0;
  discardImage: object;
  loader: boolean = false;
  arrayLength: number;
  imageUrl: string = appConfig.apiUrl;
  activeCE: any;
  activeQE: any;
  activeUser: any;
  type: any;
  filter: any;
  start_date_filter: any;
  end_date_filter: any;
  userId: any;
  constructor(private userservice: UserService, private fb: FormBuilder) {
    const info = JSON.parse(localStorage.getItem('currentUser'))
    this.userType = info.role_type;
    this.start_date_filter = '';
    this.end_date_filter = '';
    this.userId = info.id;
    console.log("userType", this.userType)
    this.assignForm = this.fb.group({
      'UID': ['', Validators.required],
      'comments': '',
      'jobId': ''
    });
    this.assignQeForm = this.fb.group({
      'UID': ['', Validators.required],
      'comments': '',
      'jobId': ''
    });
    this.discardForm = this.fb.group({
      'comments': ['', Validators.required],
      'id': '',
    });
  }

  ngOnInit() {
    if (this.userType === 1 || this.userType === 2) {
      this.userservice.getAdminJobList(8, this.offset) // incomplete = 6 refer api doc
        .subscribe(bills => {
          this.bills = bills;
          console.log(this.bills);
        });
      this.userservice.ActiveCE()
        .subscribe(res => {
          this.activeCE = res;
          console.log(res)
        })
      this.userservice.ActiveQE()
        .subscribe(res => {
          this.activeQE = res;
          console.log(res)
        })
    }
    // get list of ce jobs
    else if (this.userType === 4) {
      this.userservice.getCEJobList(8, this.userId, this.offset) // 4 for qe refer to api doc
        .subscribe(bills => {
          this.bills = bills;
          console.log(bills);
        });
    }
    // get list of qe jobs
    else if (this.userType === 3) {
      this.userservice.getQEJobList(8, this.userId, this.offset) // 4 for qe refer to api doc
        .subscribe(bills => {
          this.bills = bills;
          console.log(bills);
        });
    }
  }

  // function for pagination
  left() {
    this.leftFlag = true;
    this.rightFlag = false;
    this.noData = false;
    if (this.offset > 1) {
      this.offset = this.offset - 20;
      this.leftFlag = false;
    }
    if (this.userType === 1 || this.userType === 2) {
      this.userservice.getAdminJobList(8, this.offset)
        .subscribe(bills => {
          console.log(bills)
          this.bills = bills;
          console.log(this.bills);
        });
    }
    else if (this.userType === 4) {
      this.userservice.getCEJobList(8, this.userId, this.offset) // 4 for qe refer to api doc
        .subscribe(bills => {
          this.bills = bills;
          console.log(bills);
        });
    }
  }

  right() {
    this.noData = false;
    this.leftFlag = false;
    this.offset = this.offset + 20;
    if (this.userType === 1 || this.userType === 2) {
      this.userservice.getAdminJobList(8, this.offset)
        .subscribe(bills => {
          console.log(bills)
          if (bills.data.length == 0) {
            this.rightFlag = true;
            this.noData = true;
          }
          this.bills = bills;
          console.log(this.bills);
        });
    }
    else if (this.userType === 4) {
      this.userservice.getCEJobList(8, this.userId, this.offset) // 4 for qe refer to api doc
        .subscribe(bills => {
          console.log(bills)
          if (bills.data.length == 0) {
            this.rightFlag = true;
            this.noData = true;
          }
          this.bills = bills;
          console.log(this.bills);
        });
    }
  }
  // passs current user as argument and open the popup
  openModel(item: any) {
    console.log(item, "item data");
    this.assignForm.setValue({
      jobId: item.id,
      UID: '',
      comments: ''
    });
    this.userservice.ActiveCE()
      .subscribe(res => {
        this.activeCE = res;
        console.log(res)
      })
    this.showDialog = true; // for show dialog
  }
  assignBillCE(item: any) {
    console.log(item);
    this.userservice.assignJobCE(item)
      .subscribe(res => {
        console.log(res);
        alert('assign successfull');
        this.showDialog = false;
        this.userservice.getAdminJobList(8, this.offset) // incomplete = 6 refer api doc
          .subscribe(bill => {
            this.bills = bill;
            console.log(this.bills);
          });
      });
  }
  // open model for qe assign
  assignQE(item) {
    this.assignQeForm.setValue({
      jobId: item.id,
      UID: '',
      comments: ''
    });
    this.userservice.ActiveQE()
      .subscribe(res => {
        this.activeQE = res;
        console.log(res)
      })
    this.showQeDialog = true; // for shoe qe popup
  }
  // assign bill to QE
  assignBillQE(item: any) {
    // console.log(item);
    this.userservice.assignJobQE(item)
      .subscribe(res => {
        console.log(res);
        alert('assign successfull');
        this.showQeDialog = false;
        this.userservice.getAdminJobList(8, this.offset) // incomplete = 6 refer api doc
          .subscribe(bill => {
            this.bills = bill;
            console.log(this.bills);
          });
      });
  }

  // for view image
  openImageModel(req: any) {
    this.imageIndex = 0;
    this.loader = true;
    this.showImageDialog = true;
    console.log(req, "array data");
    this.jobId = req.id;
    console.log(this.jobId, "jobId")
    this.images = [];
    this.imageArray = [];
    this.userservice.getJobByID(req.id)
      .subscribe(res => {
        this.imageArray = res.data.copies;
        console.log(this.imageArray, "need this array");
        console.log(this.imageArray.length, "length of array");
        this.arrayLength = this.imageArray.length;
        for (let i of this.imageArray) {
            this.images.push(this.imageUrl + 'api/' + i.copyUrl);
        }
        console.log(this.images, "images url links");
        this.loader = false;
      })
  }
  // prev image
  prevImage() {
    if (this.imageIndex > 0) {
      this.imageIndex = this.imageIndex - 1;
    }
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
  discard(item: any) {
    console.log(item, "discard item");
    this.discardDialog = true;
    this.discardForm.setValue({
      id: item.id,
      comments: '',
    });
  }
  discardBill(item: any) {
    console.log(item, "item id");
    this.userservice.discardConsumerJOB(item)
      .subscribe(res => {
        console.log(res);
        alert("Bill Discarded");
        this.discardDialog = false;
        this.userservice.getAdminJobList(8, this.offset) // incomplete = 6 refer api doc
          .subscribe(bills => {
            this.bills = bills;
            console.log(this.bills);
          });
      })
  }
  // discard bill image
  commentBoxData(comment: string) {
    console.log(comment, "commeents")
    const imageID = this.imageArray[this.imageIndex].copyId;
    console.log(imageID, "image id ")
    this.discardImage = {
      'BID': this.jobId,
      'ImageID': imageID,
      'comments': comment
    }
    console.log(this.discardImage)
    this.userservice.discardConsumerBillImage(this.discardImage)
      .subscribe(res => {
        console.log(res)
        alert('Image discarded');
        // this.showImageDialog = false;
        // if userType is Admin/SuperAdmin get list of new bills
        this.userservice.getAdminJobList(8, this.offset) // incomplete = 6 refer api doc
          .subscribe(bills => {
            this.bills = bills;
            console.log(this.bills);
          });
      }, error => {
        console.log(error);
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      })
  }
  getJobId(jid: number) {
    this.jobId = jid;
  }
  // complete job by admin 
  commentBoxDataAdmin(comment: string) {
    console.log(comment);
    this.userservice.completeJobByAdmin(this.jobId, comment)
      .subscribe(res => {
        console.log(res)
        alert("JOB Complete !! Enjoy !!");
        this.userservice.getAdminJobList(8, this.offset) // under progress = 8 refer api doc
          .subscribe(bills => {
            this.bills = bills;
            console.log(this.bills);
          });
      }, (err) => {
        console.log(err);
        const errMsg = JSON.parse(err['_body']);
        alert(errMsg.reason);
      })
  }
  // Filter   '&assigned_to_ce='
  onSelectType(type) {
    console.log(type);
    this.type = type;
    if (type == 'ce') {
      this.userservice.ActiveCE()
        .subscribe(res => {
          this.activeUser = res;
          console.log(res)
        })
    }
    else {
      this.userservice.ActiveQE()
        .subscribe(res => {
          this.activeUser = res;
          console.log(res)
        })
    }
  }
  onSelectUser(id) {
    console.log(id);
    if (this.type == 'ce') {
      this.filter = '&assigned_to_ce=' + id;
    } else {
      this.filter = '&assigned_to_qe=' + id;
    }
    this.loader = true;
    this.userservice.getFilteredJobList(8, this.filter) // incomplete = 6 refer api doc
      .subscribe(bills => {
        this.bills = bills;
        this.loader = false;
        console.log(this.bills);
      });
  }
  selectDate(date, start) {
    if (this.start_date_filter && this.end_date_filter) {
      this.filter = `&start_date=${this.start_date_filter}&end_date=${this.end_date_filter}`;
      this.loader = true;
      this.userservice.getFilteredJobList(8, this.filter) // incomplete = 6 refer api doc
        .subscribe(bills => {
          this.bills = bills;
          this.loader = false;
          console.log(this.bills);
        });
    }
  }
  jobDay(day) {
    console.log(day);
    this.loader = true;
    this.userservice.getDayLeftJobList(8, day) // incomplete = 6 refer api doc
      .subscribe(bills => {
        this.bills = bills;
        this.loader = false;
        console.log(this.bills);
      });
  }
}

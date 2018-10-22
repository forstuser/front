import { Component, OnInit, ElementRef } from "@angular/core";
import { UserService } from "../../../../_services/user.service";
import { appConfig } from "../../../../app.config";
import { ModalService } from "../../../../_services/modal.service";
import { NgForm } from "@angular/forms";
import { NgxNotificationService } from "ngx-notification";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-new-assisted-user",
  templateUrl: "./new-assisted-user.component.html",
  styleUrls: ["./new-assisted-user.component.css"]
})
export class NewAssistedUserComponent implements OnInit {
  new: number = appConfig.JOB_STATUS.NEW;
  ce: number = appConfig.USERS.CE;
  imageUrl: string = appConfig.apiUrl;
  assistedUsers: any;
  discardView: string = "discardView";
  sellerId: number;
  users: any;
  jobId: number;
  userType: any;
  discardReasons: any[] = [];
  showSellerPopup: boolean = false;
  rawImageArray: any[] = [];
  imageArray: any[] = [];
  images: any[] = [];
  imageArrayLength: number;
  imageIndex: number = 0;
  imagerotation: number = 0;
  title: string = "New Assisted User";
  constructor(
    private __route: ActivatedRoute,
    private __router: Router,
    private __userservice: UserService,
    private __modalservice: ModalService,
    private __ngxNotificationService: NgxNotificationService
  ) {
    const info = JSON.parse(localStorage.getItem("currentUser"));
    if (info != null) {
      this.userType = info.role_type;
    } else {
      this.__router.navigateByUrl("/login");
    }
  }

  ngOnInit() {
    if (
      this.userType == appConfig.USERS.ADMIN ||
      this.userType == appConfig.USERS.SUPERADMIN
    ) {
      this.getAssistedUserList();
      this.getReferenceData();
    }
  }
  openModal(id: string) {
    this.__modalservice.open(id);
  }

  closeModal(id: string) {
    this.__modalservice.close(id);
  }
  public discardButtonClick(req) {
    this.jobId = req;
    this[this.discardView + req] = !this[this.discardView + req];
  }

  public getAssistedUserList() {
    this.__userservice.assistedUserList(false).subscribe(assistedUser => {
      console.log("----------------", assistedUser);
      this.assistedUsers = assistedUser;
    });
  }

  public getReferenceData() {
    this.__userservice.getReferenceData().subscribe(res => {
      console.log(res);
      this.discardReasons = res["data"].reject_reasons;
    });
  }
  public showSeller(req) {
    console.log(req);
    this.showSellerPopup = false;
    this.sellerId = req.id;
    this.images = [];
    let count = 0;
    this.imageArrayLength = count;
    this.rawImageArray = req.document_details || [];
    // if (this.rawImageArray.length == 0) {
    //   alert("There is no image in this bill please contact Admin");
    // }
    this.rawImageArray.forEach((i, index) => {
      let iIndex = i.index || index;
      console.log("image index", iIndex);
      this.images.push(
        this.imageUrl +
          "api/assisted/users/" +
          this.sellerId +
          "/images/" +
          iIndex
      );
      count += 1;
    });
    console.log("iamge ki array", this.images);
    this.imageArrayLength = count;
    this.showSellerPopup = true;
  }
  close($event) {
    if ($event == null) {
      this.showSellerPopup = false;
    }
  }
  prevImage() {
    if (this.imageIndex > 0) {
      this.imageIndex = this.imageIndex - 1;
    }
  }
  nextImage() {
    if (this.imageIndex < this.imageArrayLength - 1) {
      this.imageIndex = this.imageIndex + 1;
    }
  }
  rotate() {
    this.imagerotation = this.imagerotation + 90;
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../../_services/user.service';
import { appConfig } from '../../../../../app.config';
declare var webGlObject: any;
@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {
  imageUrl: string = appConfig.apiUrl;
  sellers: any[] = []
  cashbackId: number;
  jobDetails: any;
  rawImageArray: any[] = [];
  imageArray: any[] = [];
  images: any[] = [];
  imageArrayLength: number;
  imageIndex: number = 0;
  imagerotation: number = 0;
  blank: string = 'NA';
  constructor(private __route: ActivatedRoute, private __userService: UserService) {
    this.cashbackId = this.__route.snapshot.params.id;
    this.getCashbackJobByID();
    this.getUserSellers();
  }

  ngOnInit() {
    webGlObject.init();
    this.images[this.imageIndex] = 'assets/images/loader.gif'
  }
  getCashbackJobByID() {
    this.__userService.cashbackJobByID(this.cashbackId)
      .subscribe(res => {
        console.log("huge response", res)
        this.images = [];
        let count = 0;
        this.jobDetails = res['data'];
        this.rawImageArray = res['data'].copies;
        if (this.rawImageArray.length == 0) {
          alert("There is no image in this bill please contact Admin")
        }
        for (let i of this.rawImageArray) {
          if (i.status_type != 9) {
            this.imageArray.push(i);
            this.images.push(this.imageUrl + 'api' + i.copyUrl)
            count += 1;
          }
        }
        this.imageArrayLength = count;
      }, err => {
        console.log("error", err);
      })
  }
  getUserSellers() {
    this.__userService.getUserSeller(this.cashbackId)
      .subscribe(res => {
        this.sellers = res['data'];
        console.log("sellers", res);
      })
  }
  rotate() {
    this.imagerotation = this.imagerotation + 90;
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
  newWindow() {
    let url = this.images[this.imageIndex];
    window.open(url, 'Image', 'resizable=1');
  }
}

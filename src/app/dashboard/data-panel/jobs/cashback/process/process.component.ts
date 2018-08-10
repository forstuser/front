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
  cashbackId: number;
  jobDetails: any;
  rawImageArray: any[] = [];
  imageArray: any[] = [];
  images: any[] = [];
  imageArrayLength: number;
  imageIndex: number = 0;
  constructor(private __route: ActivatedRoute, private __userService: UserService) {
    this.cashbackId = this.__route.snapshot.params.id;
    this.getCashbackJobByID();
  }

  ngOnInit() {
    webGlObject.init();
  }
  getCashbackJobByID() {
    this.__userService.cashbackJobByID(this.cashbackId)
      .subscribe(res => {
        let count = 0;
        this.jobDetails = res['data'];
        this.rawImageArray = res['data'].copies;
        console.log(this.rawImageArray, "image array")
        if (this.rawImageArray.length == 0) {
          alert("There is no image in this bill please contact Admin")
        }
        for (let i of this.rawImageArray) {
          if (i.status_type != 9) {
            console.log(i);
            this.imageArray.push(i);
            this.images.push(this.imageUrl + 'api' + i.copyUrl)
            count += 1;
          }
        }
        this.imageArrayLength = count;
        console.log("final image", this.images);
      }, err => {
        console.log("error", err);
      })
  }

}

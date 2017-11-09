import { UserService } from './../../../../_services/user.service';
import { appConfig } from './../../../../app.config';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import $ from 'jquery';
declare var $:any
@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
  billId:number;
  imageArray :any[] = [];
  images: string[]=[];
  imageLink: String = appConfig.imageUrl;
  imageIndex:number = 0;
  imageExist:boolean=false;
  constructor(private route: ActivatedRoute,private userservice:UserService) {
    this.billId = route.snapshot.params.id;
   }

  ngOnInit() {
    this.getImageList()
  }
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    $("#image").imgViewer2();
  }
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    $("#image").remove();
    this.imageExist =false;
    console.log("destroy")
  }
  getImageList(){
    // get bill details
    this.userservice.getJobByID(this.billId)
    .subscribe(res => {
      this.imageExist = true;
      console.log('bill details', res);
      this.imageArray = res.ImageList;
      console.log(this.imageArray.length)
      if(this.imageArray.length ==0){
        alert("There is no image in this bill please contact Admin")
      }
      for(let i of res.ImageList){
        this.images.push(this.imageLink+'bills/'+i.ImageID+"/files")
      }
      console.log(this.images,"image1");
      
    })
    // console.log(this.images,"imag2e");
    this.imageExist = true;
  }
}

import { DataService } from './../../../../_services/data.service';
import { UserService } from './../../../../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  billId:number;
  imageArray :any[] = [];
  images: string[]=[];
  imageID:string;
  config: any = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
  }
  width:number = 100;
  height:number = 100; 
  imageIndex:number = 0;
  imagerotation:number = 0;
  CELogin:boolean = false;
  constructor(private dataservice:DataService,private userservice:UserService,private route: ActivatedRoute, private router: Router) {
    this.billId = route.snapshot.params.id;
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser.UserType == '3'){
      this.CELogin= true;
    }
    // console.log(this.billId);
  }

  ngOnInit() {
    // get bill details
    this.userservice.getConsumerBillByID(this.billId)
    .subscribe(res => {
      // console.log('bill details', res);
      this.imageArray = res.ImageList;
      for(let i of res.ImageList){
        this.images.push('https://consumer-dev.binbill.com/bills/'+i.ImageID+'/files')
      }
    })
    console.log(this.images);
  }
  zoomOut(){
    if(this.height > 100 && this.width > 100){
    this.width = this.width-5;
    this.height =this.height-5;
  }
  }
  zoomIn(){
  this.width = this.width+5;
  this.height =this.height+5;
  }
  prevImage(){
    if(this.imageIndex > 0){
      this.imageIndex = this.imageIndex - 1;
    }
    // console.log(this.imageIndex ,'prev')
  }
  nextImage(){
    if(this.imageIndex < this.imageArray.length-1){
      this.imageIndex = this.imageIndex + 1;
      console.log(this.imageIndex)
    }
    // console.log(this.imageIndex ,'next')
  }
  discard(){
    const imageurl = this.images[this.imageIndex];
    this.imageID = imageurl.split('bills/').pop().split('/files').shift(); 
    console.log("id is",this.imageID)
    const imageNum = parseInt(this.imageID);
    this.dataservice.changeMessage(imageNum);

  }
  select(){
    this.dataservice.changeMessage(this.images[this.imageIndex]);
    console.log(this.imageIndex);
    console.log(this.images[this.imageIndex]);
  }
  onDragBegin(e){
    console.log(e)
  }
  onDragEnd(e){
    console.log(e)
  }
  rotate(){
this.imagerotation =  this.imagerotation + 90;
  }
}
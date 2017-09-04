import { DataService } from './../../../../_services/data.service';
import { UserService } from './../../../../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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
  constructor(private dataservice:DataService,private userservice:UserService,private route: ActivatedRoute, private router: Router) {
    this.billId = route.snapshot.params.id;
    // console.log(this.billId);
  }

  ngOnInit() {
    // get bill details
    this.userservice.getConsumerBillByID(this.billId)
    .subscribe(res => {
      // console.log('bill details', res);
      this.imageArray = res.ImageList;
      for(let i of res.ImageList){
        this.images.push('http://13.126.5.210:3000/bills/'+i.ImageID+'/files')
      }
    })
    console.log(this.images);
  }
  // getCurrentImage(image){
  //   console.log(image);
  //   this.imageID = image.split('bills/').pop().split('/files').shift(); 
  //   this.dataservice.changeMessage(this.imageID);
  // }
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
    this.imageIndex = this.imageIndex - 1;
  }
  nextImage(){
    this.imageIndex = this.imageIndex + 1;
  }
  discard(){
    const imageurl = this.images[this.imageIndex];
    this.imageID = imageurl.split('bills/').pop().split('/files').shift(); 
    console.log("id is",this.imageID)
    this.dataservice.changeMessage(this.imageID);

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
}
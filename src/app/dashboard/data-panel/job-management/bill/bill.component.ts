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
  images: string[];
  config: any = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
  }
  
  constructor(private dataservice:DataService,private userservice:UserService) {
  }

  ngOnInit() {
    // this.userservice.getImage()
    //   .subscribe(res=>{
    //     console.log(res);
    //     // this.images = res;
    //   })
    this.images = [
      'http://52.66.17.137:3000/bills/4/files',
      'http://52.66.17.137:3000/bills/5/files',
      'http://52.66.17.137:3000/bills/6/files',
      'http://52.66.17.137:3000/bills/7/files'
    ];
  }
  getCurrentImage(image){
    console.log(image[31]);
    this.dataservice.changeMessage(image[31]);
  }
}
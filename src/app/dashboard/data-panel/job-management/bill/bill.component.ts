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

  constructor() {
  }

  ngOnInit() {
    this.images = [
      'http://lorempixel.com/200/200/sports',
      'http://lorempixel.com/200/200/city',
      'http://lorempixel.com/200/200/nature'
    ];
  }
}
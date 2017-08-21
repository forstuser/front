import { UserService } from './../../../../../_services/user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})

export class ProductFormComponent implements OnInit {
  productFormID:number;
  productForm: Object;

  constructor(private route: ActivatedRoute, private router: Router, private userservice: UserService) {
    this.productFormID = route.snapshot.queryParams['ID'];
    console.log(this.productFormID);
  }


  ngOnInit() {
    this.userservice.getCategoryFormByID(this.productFormID)
      .subscribe(res =>{
        console.log(res);
        this.productForm = res;
      })
  }

}

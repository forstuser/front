import { NgForm } from '@angular/forms';
import { DataService } from './../../../../../_services/data.service';
import { UserService } from './../../../../../_services/user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})

export class ProductFormComponent implements OnInit {
  productFormID: number;
  productMainForm: Object;
  ProductFrom: any[]=[];

  constructor(private route: ActivatedRoute, private router: Router, private userservice: UserService, private dataservice: DataService) {
    this.productFormID = route.snapshot.queryParams['ID'];
    // console.log(this.productFormID);
  }


  ngOnInit() {
    this.userservice.getCategoryFormByID(this.productFormID)
      .subscribe(res => {
        // console.log(res);
        this.productMainForm = res;
      })
  }
  productFormData(form: NgForm) {
    const data = form.value;
    // console.log(data);
    // this.dataservice.getData(form.value);
    for (var val in data) {
      // console.log(data[val]);
        this.ProductFrom.push({ 'CatFormID':val, 'value': data[val] });
    }
    console.log(this.ProductFrom)
  }

}

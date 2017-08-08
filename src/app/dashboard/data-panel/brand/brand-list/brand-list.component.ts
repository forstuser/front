import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Brand } from './../../../../_models/brand';
import { UserService } from './../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {
  brands: Brand [] = [];
  showDialog = false;
  editBrandForm: FormGroup;
  constructor(private userService: UserService, private fb: FormBuilder) {
        // edit  brand form
    this.editBrandForm = this.fb.group({
      'Name' : [null, Validators.required],
      'ID' : [null, Validators.required],
      'Description': [null, Validators.required]
    });
  }

  ngOnInit() {
    this.userService.getBrandList()
      .subscribe( brandList => {
        this.brands = brandList;
        console.log(this.brands);
      });
  }
  // passs current user as argument and open the popup
  openBrandModel(item: any) {
    console.log(item);
    this.showDialog = true ; // for show dialog
    // populate prefilled value in form
    this.editBrandForm.setValue({
      Name: item.Name,
      ID: item.ID,
      Description: item.Description
    });
  }
    updateBrand( brand: any) {
    console.log(brand);
    this.userService.updateBrand(brand)
      .subscribe( res => {
        // console.log(res);
        alert('brand updated successfully');
        this.showDialog = false ;
        this.userService.getBrandList() // list update after edit
          .subscribe(brandList => {
          this.brands = brandList;
        });
      });
  }

}

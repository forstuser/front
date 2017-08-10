import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
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
  }

  ngOnInit() {
     this.editBrandForm = new FormGroup({
      Name: new FormControl(''),
      Description: new FormControl(''),
      ID: new FormControl(''),
      Details: new FormArray([])
    });
    this.userService.getBrandList()
      .subscribe( brandList => {
        this.brands = brandList;
        console.log(this.brands);
      });
  }
  // function for add row in detials field
  createItem() {
    return this.fb.group({
      'DetailID': [null],
      'DetailTypeID': [null],
      'DisplayName': [null],
      'Details': [null]
    });
  }
  addItem() {
    const control = <FormArray>this.editBrandForm.controls['Details'];
    control.push(this.createItem());
  }
  removeDetails(i: number) {
    const control = <FormArray>this.editBrandForm.controls['Details'];
    control.removeAt(i);
  }
  // passs current brand id as argument and open the popup
  openBrandModel(item) {
    // console.log(item);
    // reset  editBrand form
    this.editBrandForm = new FormGroup({
      Name: new FormControl(''),
      Description: new FormControl(''),
      ID: new FormControl(''),
      Details: new FormArray([])
    });
    // get information of current selected brand
    this.userService.getBrandDetailsbyID(item.ID)
      .subscribe(res => {
      console.log(res);
      this.showDialog = true ; // for show dialog
      // prop autofill data to form
      this.editBrandForm.controls['ID'].setValue(res.ID);
      this.editBrandForm.controls['Name'].setValue(res.Name);
      this.editBrandForm.controls['Description'].setValue(res.Description);
      res.Details.forEach(
      (po) => {
        (<FormArray>this.editBrandForm.controls['Details']).push(this.createDetailsFormGroup(po));
      });
    });
  }
 createDetailsFormGroup(payOffObj) {
    return new FormGroup({
      DetailID: new FormControl(payOffObj.DetailID),
      DetailTypeID: new FormControl(payOffObj.DetailTypeID),
      DisplayName: new FormControl(payOffObj.DisplayName),
      Details: new FormControl(payOffObj.Details)
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
  // delete brand
  deleteBrand( brand: any) {
    console.log(brand);
    const brandId = {'ID': brand.ID };
    this.userService.deleteBrand(brandId)
      .subscribe( res => {
        // console.log(res);
        alert('brand deleted successfully');
        this.userService.getBrandList() // list update after edit
          .subscribe(brandList => {
          this.brands = brandList;
        });
    });
  }
}

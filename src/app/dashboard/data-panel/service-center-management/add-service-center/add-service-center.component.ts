import { FunctionService } from './../../../../_services/function.service';
import { Category } from './../../../../_models/category';
import { Brand, BrandList } from './../../../../_models/brand';
import { UserService } from './../../../../_services/user.service';
import { OfflineSeller } from './../../../../_models/offlineSeller.interface';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-service-center',
  templateUrl: './add-service-center.component.html',
  styleUrls: ['./add-service-center.component.css']
})


export class AddServiceCenterComponent implements OnInit {
  public addserviceCenterForm: FormGroup;
  items: OfflineSeller;
  brands: any;
  cat:Category;
  detailType:any;

  constructor(private userService: UserService, private fb: FormBuilder, private functionService:FunctionService) {
  }

  ngOnInit() {
    // get list of category
    this.userService.getCategoryList(2) // 2 for category refer to api doc
    .subscribe(getCat => {
      this.cat = getCat;
      console.log(getCat,"category list");
    });
    // get list of detail type
    this.userService.getDetailList()
      .subscribe(detail_type =>{
        this.detailType = detail_type;
        console.log(this.detailType);
      })

      // get list of detail type
    this.userService.getBrandList()
    .subscribe(brandList =>{
      this.brands = brandList;
      console.log(this.detailType);
    })


      
    this.addserviceCenterForm = this.fb.group({
      'center_name' : ['', Validators.required],
      'center_brands' : ['', Validators.required],
      'center_city': ['', Validators.required],
      'center_state': ['', Validators.required],
      'center_pin': ['', Validators.required],
      'center_country': ['',Validators.required],
      'center_address': ['',Validators.required],      
      'center_latitude': '',
      'center_longitude': '',
      'center_days': '',
      'center_timings':'',
      center_details: this.fb.array([ this.createItem(), ])
    });
  }

  createItem() {
    return this.fb.group({
      'category_id':'',
      'detail_type': '',
      'value': '',
    });
  }

  addItem() {
    const control = <FormArray>this.addserviceCenterForm.controls['center_details'];
    control.push(this.createItem());
  }

  removeDetails(i: number) {
    const control = <FormArray>this.addserviceCenterForm.controls['center_details'];
    control.removeAt(i);
  }

  createASC(data: any) {
    console.log(data)
    if(data.center_details.category_id==null){
      data.center_details = [];
    }
    this.userService.createAuthorizedServiceCenter(data)
      .subscribe(res => {
        console.log(res);
        alert('New Service center added succesfully');
        this.addserviceCenterForm.reset();
      },
      error => {
        console.log(error);
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      });
  }

  // function for avoid only space submit
  avoidSpace(e){
    console.log(e);
    this.functionService.NoWhitespaceValidator(this.addserviceCenterForm,e)
  }

}

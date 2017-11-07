import { FunctionService } from './../../../../_services/function.service';
import { Category } from './../../../../_models/category';
import { Brand } from './../../../../_models/brand';
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
  brands: Brand;
  cat:Category;

  constructor(private userService: UserService, private fb: FormBuilder, private functionService:FunctionService) {
  }

  ngOnInit() {

      // get list of category
      this.userService.getCategoryList(2) // 2 for category refer to api doc
      .subscribe(getCat => {
        this.cat = getCat;
        console.log('category is ' + getCat);
      });


    this.userService.getBrandList()
      .subscribe( brandList => {
        console.log(brandList,"brandlists")
        this.brands = brandList;
        console.log(this.brands);
      });

      
    this.addserviceCenterForm = this.fb.group({
      'center_name' : ['', Validators.required],
      'center_brands' : ['', Validators.required],
      'center_city': ['', Validators.required],
      'center_state': ['', Validators.required],
      'center_pin': '',
      'center_country': ['',Validators.required],
      'center_address': ['',Validators.required],      
      'center_lattitude': '',
      'center_longitude': '',
      'center_days': ['', Validators.required],
      'center_timings': ['', Validators.required],
      Details: this.fb.array([ this.createItem(), ])
    });
  }


  createItem() {
    return this.fb.group({
      'CategoryID':'',
      'DetailTypeID': '',
      'DisplayName': '',
      'Detail': ''
    });
  }

  addItem() {
    const control = <FormArray>this.addserviceCenterForm.controls['Details'];
    control.push(this.createItem());
  }

  removeDetails(i: number) {
    const control = <FormArray>this.addserviceCenterForm.controls['Details'];
    control.removeAt(i);
  }

  createOfflineSeller(data: OfflineSeller) {
    this.userService.createAuthorizedServiceCenter(data)
      .subscribe(res => {
        console.log(res);
        alert('New Service center added succesfully');
        this.addserviceCenterForm.reset();
      });
  }

  // function for avoid only space submit
  avoidSpace(e){
    console.log(e);
    this.functionService.NoWhitespaceValidator(this.addserviceCenterForm,e)
  }

}

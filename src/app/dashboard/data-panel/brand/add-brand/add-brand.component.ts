import { FunctionService } from './../../../../_services/function.service';
import { Category } from './../../../../_models/category';
import { Brand } from './../../../../_models/brand.interface';
import { UserService } from './../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {
  public brandForm: FormGroup;
  cat:Category;
  detailType:any;
  // items: Brand [] = [];

  constructor(private userService: UserService, private fb: FormBuilder,  private functionService:FunctionService) {
   }
  ngOnInit() {
    this.brandForm = this.fb.group({
      'brand_name' : ['', Validators.required],
      'brand_description' : '',
      details: this.fb.array([ this.createItem(), ])
    });
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

  }
  createItem() {
    return this.fb.group({
      'category_id':'',
      'detail_type': '',
      'value': ''
    });
  }

  
  addItem() {
    const control = <FormArray>this.brandForm.controls['details'];
    control.push(this.createItem());
  }
  removeDetails(i: number) {
    const control = <FormArray>this.brandForm.controls['details'];
    control.removeAt(i);
  }
  createBrand(data: any) {
    console.log(data)
    this.userService.createBrand(data)
      .subscribe(res => {
        console.log(res);
        alert('New Brand added succesfully');
        this.brandForm.reset();
      }, error => {
        console.log(error);
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      });
  }
    // function for avoid only space submit
    avoidSpace(e){
      console.log(e);
      this.functionService.NoWhitespaceValidator(this.brandForm,e)
    }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../../_services/user.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-service-schedule',
  templateUrl: './add-service-schedule.component.html',
  styleUrls: ['./add-service-schedule.component.css']
})
export class AddServiceScheduleComponent implements OnInit {
brandForm:FormGroup;
cat:any;
catForms:any;
  constructor(private userService: UserService, private fb: FormBuilder) { 
    this.brandForm = this.fb.group({
      'category_id' : '',
      'brand_id' : '',
      'title':'',
      details: this.fb.array([ this.createItem(), ])
    });
  }

  ngOnInit() {
    this.userService.getSubCategoryList(3)
    .subscribe(res => {
      this.cat = res.data.subCategories;
      // console.log(res, "category");
    });
  }

  createItem() {
    return this.fb.group({
      'service_number':'',
      'service_type': '',
      'distance': '',
      'due_in_months':''
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

  onSelectCat(catID: number) {
    console.log("cat id", catID);
    this.userService.getBrandListByCategory(catID)
    .subscribe(res => {
      this.catForms = res.data;
      console.log('catForms',this.catForms)
    })
  }

  createBrand(form){
    console.log(form,"schedular")
    this.userService.addServiceSchedule(form)
    .subscribe(res=>{
      console.log(res,"form posts")
    }, (error: any) => {
      console.log(error);
      if(error.status ==0){
        alert('Internet is slow/down');
      } else{
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }
    })  
  }
}

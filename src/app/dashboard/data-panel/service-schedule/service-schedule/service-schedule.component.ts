 import { UserService } from './../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm,FormControl,FormArray } from '@angular/forms';

@Component({
  selector: 'app-service-schedule',
  templateUrl: './service-schedule.component.html',
  styleUrls: ['./service-schedule.component.css']
})
export class ServiceScheduleComponent implements OnInit {
schedule:any;
showBrandList: boolean = true;
cat:any;
editBrandForm:FormGroup;
catId:any;
catForms:any;
id:any;
  constructor(private userService: UserService,private fb: FormBuilder) { }

  ngOnInit() {
    this.editBrandForm = new FormGroup({
    category_id: new FormControl(''),
    brand_id: new FormControl(''),
    title: new FormControl(''),
    service_number: new FormControl(''),
    service_type: new FormControl(''),
    distance: new FormControl(''),
    due_in_months:new FormControl(''),
    details: new FormArray([]),

  });

    this.userService.serviceSchedule()
    .subscribe(res=>{
      console.log(res,"service schedule")
      this.schedule=res.data;
    })

    

    this.userService.getSubCategoryList(3)
    .subscribe(res => {
      this.cat = res.data.subCategories;
      console.log(this.cat, "category");
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
    const control = <FormArray>this.editBrandForm.controls['details'];
    control.push(this.createItem());
  }
  

  removeDetails(i: number) {
    const control = <FormArray>this.editBrandForm.controls['details'];
    control.removeAt(i);
  }

  editBrand(form){
    console.log(form,"forms man")
    this.catId=form.category_id;
    this.id=form.id;
    this.userService.getBrandListByCategory(this.catId)
    .subscribe(res => {
      this.catForms = res.data;
      console.log('catForms',this.catForms)
    })

    this.editBrandForm = new FormGroup({
      category_id: new FormControl(''),
      brand_id: new FormControl(''),
      title: new FormControl(''),
      service_number: new FormControl(''),
      service_type: new FormControl(''),
      distance: new FormControl(''),
      due_in_months: new FormControl(''),      
      details: new FormArray([])
    });
    this.showBrandList = false;    
    this.userService.editServiceSchedule(form,form.id)
    .subscribe(res=>{
      console.log(res,"edit");
      this.editBrandForm.controls['brand_id'].setValue(res.data.brand_id);
      this.editBrandForm.controls['category_id'].setValue(res.data.category_id)
      this.editBrandForm.controls['title'].setValue(res.data.title);
      this.editBrandForm.controls['service_number'].setValue(res.data.service_number);
      this.editBrandForm.controls['service_type'].setValue(res.data.service_type);
      this.editBrandForm.controls['distance'].setValue(res.data.distance);
      this.editBrandForm.controls['due_in_months'].setValue(res.data.due_in_months);
      res.data.details.forEach(
        (po) => {
          (<FormArray>this.editBrandForm.controls['details']).push(this.createDetailsFormGroup(po));
        });
    })
  }

  createDetailsFormGroup(payOffObj) {
    console.log(payOffObj);
    return new FormGroup({
      service_number: new FormControl(payOffObj.service_number),
      service_type: new FormControl(payOffObj.service_type),
      distance: new FormControl(payOffObj.distance),
      due_in_months:new FormControl(payOffObj.due_in_months)
    });
  }

  createBrand(form){
    console.log(form,"submit forms")
    this.userService.updateServiceSchedule(form,this.id)
    .subscribe(res=>{
      console.log(res)
    })
  }

  deleteBrand(id){
    console.log(id,"id delete")
    this.userService.deleteSchedule(id)
    .subscribe(res=>{
      console.log(res)
      alert("Successsfully Deleted")
    },error=>({

    })
  )
  }


}

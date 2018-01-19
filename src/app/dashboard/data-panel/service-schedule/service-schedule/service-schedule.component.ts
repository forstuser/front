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
editBrandForm:FormGroup;
  constructor(private userService: UserService,private fb: FormBuilder) { }

  ngOnInit() {
    this.editBrandForm = new FormGroup({
    category_id: new FormControl(''),
    brand_id: new FormControl(''),
    title: new FormControl(''),
    details: new FormArray([])
  });

    this.userService.serviceSchedule()
    .subscribe(res=>{
      console.log(res,"service schedule")
      this.schedule=res.data;
    })
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
    this.showBrandList = false;    
    console.log(form,"edit form")
  }

}

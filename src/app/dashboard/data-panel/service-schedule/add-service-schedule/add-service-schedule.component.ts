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
  constructor(private userService: UserService, private fb: FormBuilder) { 
    this.brandForm = this.fb.group({
      'category_id' : '',
      'brand_id' : '',
      'title':'',
      details: this.fb.array([ this.createItem(), ])
    });
  }

  ngOnInit() {
    
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

  createBrand(form){
    console.log(form,"schedular")
  }
}

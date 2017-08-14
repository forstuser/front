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
  // items: Brand [] = [];

  constructor(private userService: UserService, private fb: FormBuilder) {
   }
  ngOnInit() {
    this.brandForm = this.fb.group({
      'Name' : ['', Validators.required],
      'Description' : '',
       Details: this.fb.array([ this.createItem(), ])
    });
  }
  createItem() {
    return this.fb.group({
      'DetailTypeID': '',
      'DisplayName': '',
      'Details': ''
    });
  }
  addItem() {
    const control = <FormArray>this.brandForm.controls['Details'];
    control.push(this.createItem());
  }
  removeDetails(i: number) {
    const control = <FormArray>this.brandForm.controls['Details'];
    control.removeAt(i);
  }
  createBrand(data: Brand) {
    this.userService.createBrand(data)
      .subscribe(res => {
        console.log(res);
        alert('New Brand added succesfully');
        this.brandForm.reset();
      },error=>{
        console.log("working")
        if (error.status==0){
          alert("data not found");
        }
      });
  }
}

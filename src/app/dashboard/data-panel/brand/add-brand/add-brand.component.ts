import { UserService } from './../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {
  brandForm: FormGroup;
  items: any [] = [];

  constructor(private userService: UserService, private fb: FormBuilder) {
   }
  ngOnInit() {
    this.brandForm = this.fb.group({
      'Name' : [null, Validators.required],
      'Description' : [null, Validators.required],
       items: this.fb.array([ this.createItem() ])
    });
  }
  createItem(): FormGroup {
    return this.fb.group({
      'DetailTypeID': [null, Validators.required],
      'DisplayName': [null, Validators.required],
      'Details': [null, Validators.required]
    });
  }
  addItem(): void {
    // this.items = this.brandForm.get('items') as FormArray;
    const test = this.brandForm.get('items') as FormArray;
    console.log(test);
    this.items.push(this.createItem());
  }
}

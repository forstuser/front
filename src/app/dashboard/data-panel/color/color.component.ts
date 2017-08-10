import { Color } from './../../../_models/color';
import { UserService } from './../../../_services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color: Color[] = [];
  colorForm: FormGroup ;
  del: any = { };
  constructor(private userService: UserService, private fb: FormBuilder) {
    // main color form
    this.colorForm = this.fb.group({
      'Name' : [null, Validators.required]
    });
   }

  ngOnInit() {
  // get list of main category
    this.userService.getColorList()
    .subscribe(color => {
      this.color = color;
      console.log(color);
    });
  }

  // create new color
  createColor( col: any) {
    console.log(col);
    this.userService.createColor(col)
      .subscribe(res => {
        console.log(res);
        alert('Color added successfully');
        this.userService.getColorList() // list update after create new category
          .subscribe(color => {
          this.color = color;
          this.colorForm.reset();
        });
    });
  }
  // delete color
  deleteCategory(col: any) {
    console.log(col);
    this.del = { 'ID': col.ID };
    this.userService.deleteColor(this.del)
      .subscribe(res => {
        console.log(res);
        this.userService.getColorList() // list update after delete
          .subscribe(color => {
          this.color = color;
            // console.log(users);
        });
    });
  }

}

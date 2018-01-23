import { FunctionService } from './../../../_services/function.service';
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
  color: any;
  colorForm: FormGroup ;
  editCategoryForm:FormGroup;
  del: any = { };
  showDialog:boolean=false;
  colorId:Number;
  statusCode: Number;  

  constructor(private userService: UserService, private fb: FormBuilder,private functionService:FunctionService) {
    // main color form
    this.colorForm = this.fb.group({
      'colour_name' : [null, Validators.required]
      
    });
   

   this.editCategoryForm=this.fb.group({
     'colour_name':[null,Validators.required],
     'colour_id':[null],
     'status_type':[null,Validators.required]
   })
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


  openCategory(col:any){

    this.colorId=col.colour_id
    console.log(this.colorId,col.status_type)
    this.showDialog=true;
    // if (col.user_status_type === 'Active') {
    //   this.statusCode = 1;
    // } else {
    //   this.statusCode = 2;
    // }
    this.editCategoryForm.setValue({
      colour_name: col.colour_name,
      colour_id: col.colour_id,
      status_type:col.status_type
    });
  }


  updateCategory(col:any){
    if(col.status_type==1){
    this.userService.updateColor(col)
    .subscribe(res=>{
      this.showDialog=false;
      console.log(res)
      alert('Color Update Successfylly');
      this.userService.getColorList() // list update after delete
      .subscribe(color => {
      this.color = color;
    });
    })
  }
else{
  alert("Please Active first then update");
}
}


  // delete color
  deleteCategory(col: any) {
    console.log(col);
    // this.del = { 'ID': col.ID };
    this.userService.deleteColor(col)
      .subscribe(res => {
        console.log(res);
        alert('Color Deleted Successfully');
        this.userService.getColorList() // list update after delete
          .subscribe(color => {
          this.color = color;
            // console.log(users);
        });
    },error=>{
      error._body=error;
      console.log(error)
    });
  }
    // function for avoid only space submit
    avoidSpace(e){
      this.functionService.NoWhitespaceValidator(this.colorForm,e)
    }
}

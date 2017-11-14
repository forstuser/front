import { FunctionService } from './../../../_services/function.service';
import { Exclusion } from './../../../_models/exclusion';
import { UserService } from './../../../_services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from './../../../_models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-management',
  templateUrl: './list-management.component.html',
  styleUrls: ['./list-management.component.css']
})
export class ListManagementComponent implements OnInit {
  cat: Category;
  mainCat: Category;
  exclusion: Exclusion;
  getSubCatList: Category;
  showDialog = false;
  editExclusionForm: FormGroup ;
  createExclusionForm: FormGroup;
  createCat: any = { };
  del: any = { };
  detail:any;

  constructor(private userService: UserService, private fb: FormBuilder, private functionService:FunctionService) {
    
    
    // edit main category form
    this.editExclusionForm = this.fb.group({
      'title' : [null, Validators.required],
      'type': [null,Validators.required],
      'status_type':[null,Validators.required],
      'id':[null]
      
    });


    // create main category form
    this.createExclusionForm = this.fb.group({
      'title' : [null, Validators.required],
      'type': [null,Validators.required]
    });
   }



  ngOnInit() {
  // get list of main category
    // this.userService.getCategoryList(1) // 1 for category refer to api doc
    // .subscribe(mainCat => {
    //   this.mainCat = mainCat;
    //   console.log(mainCat);
    // });
    //   // get list of category
    // this.userService.getCategoryList(2) // 2 for category refer to api doc
    // .subscribe(getSubCatList => {
    //   console.log(getSubCatList);
    //   this.getSubCatList = getSubCatList;
    //   console.log(getSubCatList);
    // });
          // get list of exclusion list
    this.userService.getDetailList()
    .subscribe(detailList => {
      this.detail = detailList;
      console.log(detailList);
    });
  }


  // get list after select main category
  onSelect(id) {
    console.log(id);
    // const res = id.split(' ');
    // console.log(res[1]);
    // this.userService.getCategoryListbyRefID(res[1])
    // .subscribe(getSubCatList => {
    //   this.getSubCatList = getSubCatList;
    //   console.log(getSubCatList);
    // });
  }

  // create exclusion list
  createCategory( category: any) {
    console.log(category);
    // this.createCat = { 'CatID': category.CatID, 'Name': category.Name};
    alert('Added');
    this.userService.createDetail(category)
      .subscribe(res => {
        console.log(res);
        this.createExclusionForm.reset();
        this.userService.getDetailList() // list update after delete
        .subscribe(detailList => {
          this.detail = detailList;
          console.log(detailList);
        });
    });
  }

    // passs current user as argument and open the popup
  openCategoryModel(category: any) {
    console.log(category);
    this.showDialog = true ; // for show dialog
    // populate prefilled value in form
    this.editExclusionForm.setValue({
      title: category.title,
      type: category.type,
      status_type: category.status_type,
      id:category.id
    });
  }

  updateExclusions( category: any) {
    if(category.status_type==1){
    // console.log(category);
    this.userService.updateDetail(category)
      .subscribe( res => {
        console.log(res);
        this.showDialog=false;
        alert('Detail Type List updated successfully');
        this.showDialog = false ;
        this.userService.getDetailList() // list update after edit
        .subscribe(detailList => {
          this.detail = detailList;
          console.log(detailList);
        });
      });
  }
  else{
    alert("Please Active first then update")    
  }
  }


  deleteCategory(category: any) {
    // console.log(category);
    // this.del = { 'ID': category.ID };
    // confirm('Confirm');
    this.userService.deleteDetail(category)
      .subscribe(res => {
        console.log(res);
        alert('deleted !!');
        this.userService.getDetailList() // list update after delete
        .subscribe(detailList => {
          this.detail = detailList;
          console.log(detailList);
        },error=>{
          alert("somenthing went wrong");
        });
    });
  }
      // function for avoid only space submit
      avoidSpace(e){
        console.log(e);
        this.functionService.NoWhitespaceValidator(this.createExclusionForm,e)
      }
}

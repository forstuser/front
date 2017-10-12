import { FunctionService } from './../../../../_services/function.service';
import { Inclusion } from './../../../../_models/inclusion';
import { UserService } from './../../../../_services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from './../../../../_models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inclusions',
  templateUrl: './inclusions.component.html',
  styleUrls: ['./inclusions.component.css']
})
export class InclusionsComponent implements OnInit {
  cat: Category;
  mainCat: Category;
  inclusionList: Inclusion;
  getSubCatList: Category;
  showDialog = false;
  editInclusionForm: FormGroup ;
  createInclusionForm: FormGroup;
  createCat: any = { };
  del: any = { };
  constructor(private userService: UserService, private fb: FormBuilder, private functionService:FunctionService) {
    // edit main category form
    this.editInclusionForm = this.fb.group({
      'Name' : [null, Validators.required],
      'CatID': [null, Validators.required],
      'ID': ''
    });
    // create main category form
    this.createInclusionForm = this.fb.group({
      'Name': [null, Validators.required],
      'CatID': [null, Validators.required],
      'RefID': ['']
      // 'Level': [null, Validators.required]
    });
   }

  ngOnInit() {
  // get list of main category
    this.userService.getCategoryList(1) // 1 for category refer to api doc
    .subscribe(mainCat => {
      this.mainCat = mainCat;
      console.log(mainCat);
    });
      // get list of category
    this.userService.getCategoryList(2) // 2 for category refer to api doc
    .subscribe(getSubCatList => {
      this.getSubCatList = getSubCatList;
      console.log(getSubCatList);
    });
          // get list of exclusion list
    this.userService.getInclusionsList()
    .subscribe(exclusionList => {
      this.inclusionList = exclusionList;
      console.log(exclusionList);
    });
  }
  // get list after select main category
  onSelect(id) {
    console.log(id);
    const res = id.split(' ');
    console.log(res[1]);
    this.userService.getCategoryListbyRefID(res[1])
    .subscribe(getSubCatList => {
      this.getSubCatList = getSubCatList;
      console.log(getSubCatList);
    });
  }
  // create exclusion list
  createCategory( category: any) {
    console.log(category);
    this.createCat = { 'CatID': category.CatID, 'Name': category.Name};
    this.userService.createInclusions(this.createCat)
      .subscribe(res => {
        console.log(res);
        alert('Created!!');
        this.userService.getInclusionsList() // list update after delete
          .subscribe(getCat => {
          this.inclusionList = getCat;
            // console.log(users);
        });
    });
  }
    // passs current user as argument and open the popup
  openCategoryModel(item: any) {
    // console.log(item);
    this.showDialog = true ; // for show dialog
    // populate prefilled value in form
    this.editInclusionForm.setValue({
      Name: item.Name,
      ID: item.ID,
      CatID: item.CatID
    });
  }
  updateExclusions( category: any) {
    // console.log(category);
    this.userService.updateInclusions(category)
      .subscribe( res => {
        console.log(res);
        alert('Exclusion List updated successfully');
        this.showDialog = false ;
        this.userService.getInclusionsList() // list update after edit
          .subscribe(getSubCatList => {
          this.inclusionList = getSubCatList;
          // console.log(getCat);
        });
      });
  }
  deleteCategory(category: any) {
    // console.log(category);
    this.del = { 'ID': category.ID };
    // confirm('Confirm');
    this.userService.deleteInclusions(this.del)
      .subscribe(res => {
        console.log(res);
        alert('deleted !!');
        this.userService.getInclusionsList() // list update after delete
          .subscribe(getCat => {
          this.inclusionList = getCat;
            // console.log(getCat);
        });
    });
  }
    // function for avoid only space submit
    avoidSpace(e){
      console.log(e);
      this.functionService.NoWhitespaceValidator(this.createInclusionForm,e)
    }

}
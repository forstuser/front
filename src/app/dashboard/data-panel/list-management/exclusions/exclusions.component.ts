import { UserService } from './../../../../_services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from './../../../../_models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exclusions',
  templateUrl: './exclusions.component.html',
  styleUrls: ['./exclusions.component.css']
})
export class ExclusionsComponent implements OnInit {
  cat: Category[] = [];
  mainCat: Category[] = [];
  subCat: Category[] = [];
  getSubCatList: Category[] = [];
  showDialog = false;
  editCategoryForm: FormGroup ;
  createSubCategoryForm: FormGroup;
  createCat: any = { };
  del: any = { };
  constructor(private userService: UserService, private fb: FormBuilder) {
    // edit main category form
    this.editCategoryForm = this.fb.group({
      'Name' : [null, Validators.required],
      'ID' : [null, Validators.required],
      'RefID': [null, Validators.required]
    });
    // create main category form
    this.createSubCategoryForm = this.fb.group({
      'Name': [null, Validators.required],
      'RefID': [null, Validators.required]
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
    .subscribe(getCat => {
      this.cat = getCat;
      console.log(getCat);
    });
          // get list of exclusion list
    this.userService.getExclusionsList()
    .subscribe(getSubCat => {
      this.subCat = getSubCat;
      console.log(getSubCat);
    });
  }
  // get list after select main category
  onSelect(id) {
    console.log(id);
    const res = id.split(' ');
    console.log(res[1]);
    this.userService.getCategoryListbyID(res[1])
    .subscribe(getSubCatList => {
      this.getSubCatList = getSubCatList;
      console.log(getSubCatList);
    });
  }
  // create exclusion list
  createCategory( category: any) {
    console.log(category);
    this.createCat = { 'CatID': category.CatID, 'Name': category.Name};
    confirm('Confirm');
    this.userService.createExclusions(this.createCat)
      .subscribe(res => {
        console.log(res);
        this.userService.getExclusionsList() // list update after delete
          .subscribe(getCat => {
          this.subCat = getCat;
            // console.log(users);
        });
    });
  }
    // passs current user as argument and open the popup
  openCategoryModel(item: any) {
    this.showDialog = true ; // for show dialog
    // populate prefilled value in form
    this.editCategoryForm.setValue({
      Name: item.subcategory,
      ID: item.ID,
      RefID: item.RefID
    });
  }
  updateCategory( category: any) {
    console.log(category);
    this.userService.updateCategory(category)
      .subscribe( res => {
        // console.log(res);
        alert('category updated successfully');
        this.showDialog = false ;
        this.userService.getExclusionsList() // list update after edit
          .subscribe(getCat => {
          this.subCat = getCat;
          // console.log(getCat);
        });
      });
  }
  deleteCategory(category: any) {
    // console.log(category);
    this.del = { 'ID': category.ID };
    confirm('Confirm');
    this.userService.deleteExclusions(this.del)
      .subscribe(res => {
        console.log(res);
        this.userService.getExclusionsList() // list update after delete
          .subscribe(getCat => {
          this.subCat = getCat;
            // console.log(getCat);
        });
    });
  }

}

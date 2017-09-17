import { FunctionService } from './../../../../_services/function.service';
import { UserService } from './../../../../_services/user.service';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Category } from './../../../../_models/category';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
  cat: Category;
  mainCat: Category;
  showDialog = false;
  viewCat = false;
  createCategoryForm: FormGroup;
  createCat: any = {};
  del: any = {};
  productMainForm:any;
  showCategoryEdit:boolean = false;
  editCatModel:boolean =false;
  editCategoryFormData:any;
  editCategoryFormList:any;
  constructor(private userService: UserService, private fb: FormBuilder, private functionService:FunctionService) {


    // create main category form
    this.createCategoryForm = this.fb.group({
      'Name': [null, Validators.required],
      'RefID': [null, Validators.required],
      FormList: this.fb.array([this.createItem(),])
    });
  }

  // for push new list
  createItem() {
    return this.fb.group({
      'Type': '',
      'ElementName': '',
      List: this.fb.array([this.createValues(),])
    });
  }
  // for push new sub list
  createValues() {
    return this.fb.group({
      'DropdownName': null
    });
  }
  // add array
  addItem() {
    const control = <FormArray>this.createCategoryForm.controls['FormList'];
    control.push(this.createItem());
  }
  // add sub array
  addValues(id: number) {
    const control = <FormArray>this.createCategoryForm.get(['FormList', id, 'List']);
    control.push(this.createValues());
  }
  // remove array
  removeItem(i: number) {
    console.log(i);
    const control = <FormArray>this.createCategoryForm.controls['FormList'];
    console.log(control);
    control.removeAt(i);
  }
  // remove sub array
  removeValues(j: number) {
    const control = <FormArray>this.createCategoryForm.get(['FormList', j, 'List']);
    console.log(control);
    control.removeAt(j);
  }


  ngOnInit() {
    // get list of main category
    this.userService.getCategoryList(1) // 1 for category refer to api doc
      .subscribe(mainCat => {
        this.mainCat = mainCat;
        // console.log('mainCat' + mainCat);
      });
    // get list of category
    this.userService.getCategoryList(2) // 2 for category refer to api doc
      .subscribe(res => {
        this.cat = res.CategoryList;
        // console.log('category is ' + res);
      });
  }
  
  // create category
  createCategory(category: any) {
    console.log(category);
    this.createCat = { 'Level': 2, 'RefID': category.RefID, 'Name': category.Name, 'FormList': category.FormList };
    console.log(this.createCat)
    this.userService.createCategory(this.createCat)
      .subscribe(res => {
        // console.log(res);
        alert('New Category added succesfully');
        // this.createCategoryForm.reset();
        // reset  editCategory form


        this.userService.getCategoryList(2) // list update after createcat
          .subscribe(res => {
            this.cat = res.CategoryList;
            // console.log(res,"category")
          });
      });
  }

  createDetailsFormGroup(payOffObj) {
    console.log(payOffObj,'pay')
    return new FormGroup({
      Type: new FormControl(payOffObj.Type),
      ElementName: new FormControl(payOffObj.ElementName),
      List: new FormControl(payOffObj.List)
    });
  }
  updateCategory(category: any) {
    console.log("caregory",category);
    category = { Name:category.Name, ID:category.ID, RefID: category.RefID}
    this.userService.updateCategory(category)
      .subscribe(res => {
        // console.log(res);
        alert('category updated successfully');
        this.showDialog = false;
        this.userService.getCategoryList(2) // list update after edit
          .subscribe(getCat => {
            this.cat = getCat.CategoryList;
            // console.log(getCat);
          });
      });
  }
  deleteCategory(category: any) {
    this.del = { 'ID': category.ID };
    this.userService.deleteCategory(this.del)
      .subscribe(res => {
        console.log(res);
        alert("Deleted Successfully");
        this.userService.getCategoryList(2) // list update after delete
          .subscribe(getCat => {
            this.cat = getCat.CategoryList;
            // console.log(getCat);
          });
      });
  }
  viewCategory(data:any){
    console.log(data)
    this.userService.getCategoryListbyID(data.ID)   
    .subscribe(res => {
      this.productMainForm = res;
      this.viewCat = true; // for show dialog
      console.log(res);
    })
  }
    // function for avoid only space submit
    avoidSpace(e){
      console.log(e);
      this.functionService.NoWhitespaceValidator(this.createCategoryForm,e)
    }
    back(){
      this.showCategoryEdit = false;
    }
    openCategoryModel(req){
      // console.log(req);
      this.userService.getCategoryListbyID(req.ID)
      .subscribe(res => {
        this.editCategoryFormData = res;
        this.editCategoryFormList = res.FormList
        this.showCategoryEdit = true; // for show dialog
        console.log(res);
        this.editCatModel = true;
      })
    }
}

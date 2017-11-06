import { FunctionService } from './../../../../_services/function.service';
import { UserService } from './../../../../_services/user.service';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Category } from './../../../../_models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  cat: Category;
  mainCat: Category;
  catForm:any;
  showDialog = false;
  viewCat = false;
  editCategoryForm: FormGroup;
  createCategoryForm: FormGroup;
  createCat: any = {};
  del: any = {};
  productMainForm:any;
  showCategoryEdit:boolean = false;
  order: string = 'category';
  showEdit:boolean = false;
  constructor(private userService: UserService, private fb: FormBuilder, private functionService:FunctionService) {

    // edit main category form
    this.editCategoryForm = this.fb.group({
      Name: new FormControl(''),
      ID: new FormControl(''),
      RefID: new FormControl(''),
      category_forms: new FormArray([])
    });

    // create main category form
    this.createCategoryForm = this.fb.group({
      'category_name': [null, Validators.required],
      'ref_id': [null, Validators.required],
      'category_level':2,
      category_forms: this.fb.array([this.createItem(),])
    });
  }

  // for push new list
  createItem() {
    return this.fb.group({
      'form_type': '',
      'title': '',
      drop_downs: this.fb.array([this.createValues(),])
    });
  }
  // for push new sub list
  createValues() {
    return this.fb.group({
      'title': null,
      'type':null
    });
  }
  // add array
  addItem() {
    const control = <FormArray>this.createCategoryForm.controls['category_forms'];
    control.push(this.createItem());
  }
  // add sub array
  addValues(id: number) {
    console.log(id,"id after")
    const control = <FormArray>this.createCategoryForm.get(['category_forms', id, 'drop_downs']);
    control.push(this.createValues());
    id=id+1;
  }
  // remove array
  removeItem(i: number) {
    console.log(i);
    const control = <FormArray>this.createCategoryForm.controls['category_forms'];
    console.log(control);
    control.removeAt(i);
  }
  // remove sub array
  removeValues(j: number) {
    const control = <FormArray>this.createCategoryForm.get(['category_forms', j, 'drop_downs']);
    console.log(control);
    control.removeAt(j);
  }
    // add array
    addItem2() {
      const control = <FormArray>this.editCategoryForm.controls['category_forms'];
      control.push(this.createItem());
    }
    // add sub array
    addValues2(id: number) {
      const control = <FormArray>this.editCategoryForm.get(['category_forms', id, 'drop_downs']);
      control.push(this.createValues());
    }
    // remove array
    removeItem2(i: number) {
      console.log(i);
      const control = <FormArray>this.editCategoryForm.controls['category_forms'];
      console.log(control);
      control.removeAt(i);
    }
    // remove sub array
    removeValues2(j: number) {
      const control = <FormArray>this.editCategoryForm.get(['category_forms', j, 'drop_downs']);
      console.log(control);
      control.removeAt(j);
    }

  ngOnInit() {
    // get list of main category
    this.userService.getCategoryList(1) // 1 for main category refer to api doc
      .subscribe(mainCat => {
        this.mainCat = mainCat;
        console.log(mainCat);
      });
  }
  // after select main category show list of category
  onSelectMainCat(catID:number){
    console.log(catID);
    this.userService.getSubCategoryList(catID)
    .subscribe(res => {
      this.cat = res.data.subCategories;
      console.log(res,"category");
    });
  }
  // after select category show  category form
  onSelectCat(catID:number){
    this.showEdit = true;
    console.log(catID);
    this.userService.getSubCategoryList(catID)
    .subscribe(res => {
      this.catForm = res.data.categoryForms;
      console.log(this.catForm,"category form");
    });
  }
  // create category
  createCategory(category: any) {
    console.log(category);
    this.createCat = { 'Level': 2, 'RefID': category.RefID, 'Name': category.Name, 'category_forms': category.category_forms };
    console.log(this.createCat)
    this.userService.createCategory(this.createCat)
      .subscribe(res => {
        // console.log(res);
        alert('New Category added succesfully');
        // this.createCategoryForm.reset();
        // reset  editCategory form
        this.editCategoryForm = new FormGroup({
          Name: new FormControl(''),
          ID: new FormControl(''),
          RefID: new FormControl(''),
          category_forms: new FormArray([])
        });

        this.userService.getCategoryList(2) // list update after createcat
          .subscribe(res => {
            this.cat = res.CategoryList;
            // console.log(res,"category")
          });
      });
  }


  // passs current user as argument and open the popup
  openCategoryModel(item: any) {
    // console.log('open cat is ',item);

    // reset  editCategory form
    this.editCategoryForm = new FormGroup({
      Name: new FormControl(''),
      ID: new FormControl(''),
      RefID: new FormControl(''),
      category_forms: new FormArray([])
    });
    this.userService.getCategoryListbyID(item.ID)
      .subscribe(res => {
        this.showCategoryEdit = true; // for show dialog
        console.log(res);
        this.editCategoryForm.controls['ID'].setValue(res.Category[0].ID);
        this.editCategoryForm.controls['RefID'].setValue(res.Category[0].RefID);
        this.editCategoryForm.controls['Name'].setValue(res.Category[0].Name);
        res.category_forms.forEach(
          (po) => {
            (<FormArray>this.editCategoryForm.controls['category_forms']).push(this.createDetailsFormGroup(po));
          });
      })
  }
  createDetailsFormGroup(payOffObj) {
    console.log(payOffObj,'pay')
    return new FormGroup({
      form_type: new FormControl(payOffObj.form_type),
      FormID:new FormControl(payOffObj.FormID),
      title: new FormControl(payOffObj.title),
      drop_downs: new FormControl(payOffObj.drop_downs[0])
    });
  }
  updateCategory(category: any) {
    // category = { Name:category.Name, ID:category.ID, RefID: category.RefID}
    console.log("caregory",category);
    this.userService.editCategoryForm(category)
      .subscribe(res => {
        console.log(res);
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
    deleteForm(drop){
      console.log(drop,"drop");
      this.userService.deleteCategoryForm(drop)
        .subscribe(res=>{
          console.log(res);
          
        })
    }
}

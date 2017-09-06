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
  showDialog = false;
  viewCat = false;
  editCategoryForm: FormGroup;
  createCategoryForm: FormGroup;
  createCat: any = {};
  del: any = {};
  productMainForm:any;

  constructor(private userService: UserService, private fb: FormBuilder, private functionService:FunctionService) {

    // edit main category form
    this.editCategoryForm = this.fb.group({
      Name: new FormControl(''),
      ID: new FormControl(''),
      RefID: new FormControl(''),
      FormList: new FormArray([])
    });

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
      .subscribe(getCat => {
        this.cat = getCat;
        console.log('category is ' + getCat);
      });
  }
  
  // create category
  createCategory(category: any) {
    console.log(category);
    this.createCat = { 'Level': 2, 'RefID': category.RefID, 'Name': category.Name, 'FormList': category.FormList };
    console.log(this.createCat)
    this.userService.createCategory(this.createCat)
      .subscribe(res => {
        console.log(res);
        alert('New Category added succesfully');
        // this.createCategoryForm.reset();
        // reset  editCategory form
        this.editCategoryForm = new FormGroup({
          Name: new FormControl(''),
          ID: new FormControl(''),
          RefID: new FormControl(''),
          FormList: new FormArray([])
        });

        this.userService.getCategoryList(2) // list update after createcat
          .subscribe(getCat => {
            this.cat = getCat;
          });
      });
  }


  // passs current user as argument and open the popup
  openCategoryModel(item: any) {
    console.log(item);

    // reset  editCategory form
    this.editCategoryForm = new FormGroup({
      Name: new FormControl(''),
      ID: new FormControl(''),
      RefID: new FormControl(''),
      FormList: new FormArray([])
    });
    this.userService.getCategoryListbyID(item.ID)
      .subscribe(res => {
        this.showDialog = true; // for show dialog
        console.log(res);
        this.editCategoryForm.controls['ID'].setValue(res.Category[0].ID);
        this.editCategoryForm.controls['RefID'].setValue(res.Category[0].RefID);
        this.editCategoryForm.controls['Name'].setValue(res.Category[0].Name);
        // res.FormList.forEach(
        //   (po) => {
        //     (<FormArray>this.editCategoryForm.controls['FormList']).push(this.createDetailsFormGroup(po));
        //   });
      })
    // populate prefilled value in form
    // this.editCategoryForm.setValue({
    //   Name: item.category,
    //   ID: item.ID,
    //   RefID: item.RefID
    // });
  }
  // createDetailsFormGroup(payOffObj) {
  //   console.log(payOffObj);
  //   return new FormGroup({
  //     Type: new FormControl(payOffObj.Type),
  //     ElementName: new FormControl(payOffObj.ElementName),
  //   });
  // }
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
            this.cat = getCat;
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
            this.cat = getCat;
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
}

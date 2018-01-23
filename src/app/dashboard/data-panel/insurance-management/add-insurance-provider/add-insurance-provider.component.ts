import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../_services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FunctionService } from './../../../../_services/function.service';

@Component({
  selector: 'app-add-insurance-provider',
  templateUrl: './add-insurance-provider.component.html',
  styleUrls: ['./add-insurance-provider.component.css']
})
export class AddInsuranceProviderComponent implements OnInit {
  addInsuranceForm: FormGroup;
  getCatList:any;
  catId:number;
  cat:any;
  categories_id:any;

  constructor(private userService: UserService, private fb: FormBuilder, private functionService: FunctionService) {
    this.addInsuranceForm = this.fb.group({
      'name': ['', Validators.required],
      'main_category_id':['',Validators.required],
      'categories':'',
      'city': '',
      'state': '',
      'pincode': '',
      'address': '',
      'latitude': '',
      'longitude': '',
      'gstin': '',
      'reg_no': '',
      'pan_no': '',
      'email': '',
      'url': '',
      'contact_no':'',
      'status_type':"1",
      'type':''
    });
   }

  ngOnInit() {  
      this.userService.getCategoryList(1)
      .subscribe(res=>{
        console.log(res,"categorylist")
        this.getCatList=res;
        console.log(this.getCatList,"list of category")
      })
    
  }

  onSelect(catId){
    console.log(catId,"id");
    this.userService.getSubCategoryList(catId)
    .subscribe(res=>{
      this.cat=res.data.subCategories;

      console.log(this.cat,"subCategories")
    })
  }

  onSelectCat(refId){
    this.categories_id=refId;
    console.log("this.categories_id",this.categories_id)
  }


  createInsurance(data: any) {
      
    console.log('data:', data);
    data.categories = data.categories.map((item) => {
    return  {
    category_id: item
      };
    });
    // if (this.checkCategoryValues(data.center_details)) {
      this.userService.createInsuranceProvider(data)
        .subscribe(res => {
          console.log(res);
          alert('New Service center added succesfully');
          this.addInsuranceForm.reset();
        },
        error => {
          console.log(error);
          const err = JSON.parse(error['_body']);
          alert(err.reason);
        });
    // } else {
    //   alert('Please select category first !');
    }

     // function for avoid only space submit
  avoidSpace(e) {
    console.log(e);
    this.functionService.NoWhitespaceValidator(this.addInsuranceForm, e)
  }

}

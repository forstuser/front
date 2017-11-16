import { Category } from './../../../../_models/category';
import { Brand } from './../../../../_models/brand';
import { FunctionService } from './../../../../_services/function.service';
import { AuthorizedCenter } from './../../../../_models/authorizedCenter.interface';
import { FormBuilder, FormGroup,Validators, FormControl, FormArray } from '@angular/forms';
import { UserService } from './../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-center-list',
  templateUrl: './service-center-list.component.html',
  styleUrls: ['./service-center-list.component.css']
})
export class ServiceCenterListComponent implements OnInit {
  brands:Brand;
  authorizedServiceCenter: AuthorizedCenter;
  showDialog = false;
  authorizedServiceCenterForm: FormGroup;
  cat:Category
  prev:number=0;
  next:number=10;
  leftFlag:boolean= true;
  rightFlag:boolean = false;
  noData:boolean = false;
  showASCList:boolean = true;
  detailType:any;
  center=[];
  ascDetail:any;
    constructor(private userService: UserService, private fb: FormBuilder,private functionService:FunctionService) {
  }

  ngOnInit() {
    
      // get list of category
      this.userService.getCategoryList(2) // 2 for category refer to api doc
      .subscribe(getCat => {
        this.cat = getCat;
        console.log('category is ' + getCat);
      });
    // get brand list
    this.userService.getBrandList()
    .subscribe( res => {
      this.brands = res;
      console.log(this.brands);
    });
    // this.userService.getBrandList()
    // .subscribe(brandList =>{
    //   this.brands = brandList;
    //   console.log(this.detailType);
    // })
    this.authorizedServiceCenterForm = this.fb.group({
      'center_id':'',
      'center_name' : ['', Validators.required],
      'center_brands' : ['', Validators.required],
      'center_address': ['',Validators.required],    
      'center_city': ['', Validators.required],
      'center_state': ['', Validators.required],
      'center_pin': ['', Validators.required],
      'center_country': ['',Validators.required],  
      'center_latitude': '',
      'center_longitude': '',
      'center_days': '',
      'center_timings':'',
       details: this.fb.array([ this.createItem(), ])
    });


    this.userService.getAuthorizedServiceCenterList()
      .subscribe( authorizedServiceCenterList => {
        this.authorizedServiceCenter = authorizedServiceCenterList;
        console.log(this.authorizedServiceCenter,"asc");
      });


  // get list of detail type
    this.userService.getDetailList()
    .subscribe(detail_type =>{
      this.detailType = detail_type;
      console.log(this.detailType);
    })
  }
  // function for add row in detials field
  createItem() {
    return this.fb.group({
      'id':'',
      'category_id':'',
      'detail_type': '',
      'value': '',
    });
  }

  addItem() {
    const control = <FormArray>this.authorizedServiceCenterForm.controls['center_details'];
    control.push(this.createItem());
  }


  removeDetails(i: number) {
    const control = <FormArray>this.authorizedServiceCenterForm.controls['center_details'];
    control.removeAt(i);
  }


  removeItem(item,data){
    this.center=data.center_details;
    console.log(item,item['_value'],"catId");
    this.ascDetail=item['_value'];

    this.userService.removeAscDetails(this.ascDetail,this.center)
    .subscribe( res => {
      console.log(res);
      alert('Detail deleted successfully');
    });
  }

  // passs current brand id as argument and open the popup
  openModel(item) {
    console.log(item);
    this.userService.getBrandList()
    .subscribe(brandList =>{
      this.brands = brandList;
      console.log(this.brands,"brand hai bhia ye");
    })
    
    // reset  editBrand form
    this.authorizedServiceCenterForm = new FormGroup({
      center_name: new FormControl(''),
      center_id:new FormControl(''),
      center_brands: new FormArray([]),
      center_address: new FormControl(''),
      center_city: new FormControl(''),
      center_state: new FormControl(''),
      center_country: new FormControl(''),
      center_pin: new FormControl(''),
      center_latitude: new FormControl(''),
      center_longitude: new FormControl(''),
      center_days: new FormControl(''),
      center_timings:new FormControl(''),
      center_details: new FormArray([])
    });
    // get information of current selected brand
    this.userService.getAuthorizedServiceCenterByID(item.center_id)
      .subscribe(res => {
        console.log(res,"bhai response")
      this.showASCList = false ; // for show dialog
      // prop autofill data to form
      this.authorizedServiceCenterForm.controls['center_id'].setValue(res.data.center_id);
      this.authorizedServiceCenterForm.controls['center_name'].setValue(res.data.center_name);
      // this.authorizedServiceCenterForm.controls['center_brands'].setValue(res.data.center_brands);
      this.authorizedServiceCenterForm.controls['center_address'].setValue(res.data.center_address);
      this.authorizedServiceCenterForm.controls['center_city'].setValue(res.data.center_city);
      this.authorizedServiceCenterForm.controls['center_state'].setValue(res.data.center_state);
      this.authorizedServiceCenterForm.controls['center_country'].setValue(res.data.center_country);
      this.authorizedServiceCenterForm.controls['center_pin'].setValue(res.data.center_pin);
      this.authorizedServiceCenterForm.controls['center_latitude'].setValue(res.data.center_latitude);
      this.authorizedServiceCenterForm.controls['center_longitude'].setValue(res.data.center_longitude);
      this.authorizedServiceCenterForm.controls['center_days'].setValue(res.data.center_days);
      this.authorizedServiceCenterForm.controls['center_timings'].setValue(res.data.center_timings);
      res.data.details.forEach(
      (po) => {
        (<FormArray>this.authorizedServiceCenterForm.controls['center_details']).push(this.createDetailsFormGroup(po));
      });
    });
  }


 createDetailsFormGroup(payOffObj) {
   console.log(payOffObj,"payyoff obj")
    return new FormGroup({
      category_id:new FormControl(payOffObj.category_id),
      detail_type: new FormControl(payOffObj.detail_type),
      value: new FormControl(payOffObj.value),
      id: new FormControl(payOffObj.id)
    });
  }

  // update
  // updateOnlineSeller( asc: any) {
  //   // console.log(asc,"ssss");
  //   this.userService.updateAuthorizedServiceCenter(asc)
  //     .subscribe( res => {
  //       // console.log(res);
  //       alert('service center updated successfully');
  //       this.showDialog = false ;
  //       this.userService.getAuthorizedServiceCenterList() // list update after edit
  //         .subscribe(authorizedServiceCenterList => {
  //         this.authorizedServiceCenter = authorizedServiceCenterList;
  //       });
  //   });
  // }

  // delete ASC
  deleteAuthorizedServiceCenter(center_id:Number) {
    this.userService.DeleteAuthorizedServiceCenter(center_id)
      .subscribe( res => {
        // console.log(res);
        alert('Authorization Service Center deleted successfully');
        this.userService.getAuthorizedServiceCenterList() // list update after delete
          .subscribe(authorizedServiceCenterList => {
          this.authorizedServiceCenter = authorizedServiceCenterList;
        });
    });
  }


  updateAuthService(data){
    console.log(data,"bhia data")

    this.center=data.center_details;
    console.log(this.center,"ds")
    this.userService.updateAuthorizedServiceCenter(data,this.center)
    .subscribe(res=>{
        console.log("response",res)
        this.showDialog=false;
        alert("edit successfully")
        this.userService.getAuthorizedServiceCenterList() // list update after edit
        .subscribe(authorizedServiceCenterList => {
        this.authorizedServiceCenter = authorizedServiceCenterList;
      },err=>{
        console.log("Bad request")
      });

    })
  } 


    // function for pagination
    // left(){
    //   this.noData = false;
    //   this.prev = this.prev-10;
    //   if(this.prev ==0){
    //     this.leftFlag = true;
    //   }
    //   this.userService.getAuthorizedServiceCenterList()
    //   .subscribe( authorizedServiceCenterList => {
    //     console.log(this.authorizedServiceCenter)
    //     if(authorizedServiceCenterList.statusCode==100){
    //       this.rightFlag = false;
    //     }
    //     this.authorizedServiceCenter = authorizedServiceCenterList;
    //     console.log(this.authorizedServiceCenter);
    //   });
    // }


    // right(){
    //   this.noData = false;
    //   this.leftFlag = false;
    //   this.prev = this.prev+10;
    //   console.log(this.prev);
    //   console.log(this.next);
    //   this.userService.getAuthorizedServiceCenterList()
    //   .subscribe( authorizedServiceCenterList => {
    //     console.log(this.authorizedServiceCenter)
    //     if(authorizedServiceCenterList.statusCode==105){
    //       this.rightFlag = true;
    //       this.noData = true;
    //     }
    //     this.authorizedServiceCenter = authorizedServiceCenterList;
    //     console.log(this.authorizedServiceCenter);
    //   });
    // }


    back(){
      this.showASCList = true;
    }

    avoidSpace(e){
      console.log(e);
      this.functionService.NoWhitespaceValidator(this.authorizedServiceCenterForm,e)
    }
}

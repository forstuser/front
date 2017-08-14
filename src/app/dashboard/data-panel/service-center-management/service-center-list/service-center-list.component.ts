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
  authorizedServiceCenter: AuthorizedCenter;
  showDialog = false;
  authorizedServiceCenterForm: FormGroup;
  constructor(private userService: UserService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.authorizedServiceCenterForm = this.fb.group({
      'ID':'',
      'Name' : ['', Validators.required],
      'BrandID' : ['', Validators.required],
      'HouseNo' : '',
      'Block': '',
      'Street': '',
      'Sector': '',
      'City': ['', Validators.required],
      'State': ['', Validators.required],
      'PinCode': '',
      'NearBy': '',
      'Lattitude': '',
      'Longitude': '',
      'OpenDays': ['', Validators.required],
      'Timings': ['', Validators.required],
      Details: this.fb.array([ this.createItem(), ])
    });

    this.userService.getAuthorizedServiceCenterList()
      .subscribe( authorizedServiceCenterList => {
        this.authorizedServiceCenter = authorizedServiceCenterList;
        console.log(this.authorizedServiceCenter);
      });
  }
  // function for add row in detials field
  createItem() {
    return this.fb.group({
      'DetailID': [null],
      'DetailTypeID': [null],
      'DisplayName': [null],
      'Details': [null]
    });
  }

  addItem() {
    const control = <FormArray>this.authorizedServiceCenterForm.controls['Details'];
    control.push(this.createItem());
  }
  removeDetails(i: number) {
    const control = <FormArray>this.authorizedServiceCenterForm.controls['Details'];
    control.removeAt(i);
  }
  // passs current brand id as argument and open the popup
  openModel(item) {
    // reset  editBrand form
    this.authorizedServiceCenterForm = new FormGroup({
      Name: new FormControl(''),
      ID:new FormControl(''),
      BrandID: new FormControl(''),
      HouseNo: new FormControl(''),
      Block: new FormControl(''),
      Street: new FormControl(''),
      Sector: new FormControl(''),
      City: new FormControl(''),
      State: new FormControl(''),
      PinCode: new FormControl(''),
      NearBy: new FormControl(''),
      Lattitude: new FormControl(''),
      Longitude: new FormControl(''),
      OpenDays: new FormControl(''),
      Details: new FormArray([])
    });
    // get information of current selected brand
    this.userService.getAuthorizedServiceCenterByID(item.ID)
      .subscribe(res => {
      this.showDialog = true ; // for show dialog
      console.log(res);
      // prop autofill data to form
      this.authorizedServiceCenterForm.controls['ID'].setValue(res.ID);
      this.authorizedServiceCenterForm.controls['Name'].setValue(res.Name);
      this.authorizedServiceCenterForm.controls['BrandID'].setValue(res.BrandID);
      this.authorizedServiceCenterForm.controls['HouseNo'].setValue(res.HouseNo);
      this.authorizedServiceCenterForm.controls['Block'].setValue(res.Block);
      this.authorizedServiceCenterForm.controls['Street'].setValue(res.Street);
      this.authorizedServiceCenterForm.controls['Sector'].setValue(res.Sector);
      this.authorizedServiceCenterForm.controls['City'].setValue(res.City);
      this.authorizedServiceCenterForm.controls['State'].setValue(res.State);
      this.authorizedServiceCenterForm.controls['PinCode'].setValue(res.PinCode);
      this.authorizedServiceCenterForm.controls['NearBy'].setValue(res.NearBy);
      this.authorizedServiceCenterForm.controls['Lattitude'].setValue(res.Lattitude);
      this.authorizedServiceCenterForm.controls['Longitude'].setValue(res.Longitude);
      this.authorizedServiceCenterForm.controls['OpenDays'].setValue(res.OpenDays);
      
      res.Details.forEach(
      (po) => {
        (<FormArray>this.authorizedServiceCenterForm.controls['Details']).push(this.createDetailsFormGroup(po));
      });
    });
  }
 createDetailsFormGroup(payOffObj) {
    return new FormGroup({
      DetailID: new FormControl(payOffObj.DetailID),
      DetailTypeID: new FormControl(payOffObj.DetailTypeID),
      DisplayName: new FormControl(payOffObj.DisplayName),
      Details: new FormControl(payOffObj.Details)
    });
  }
  // update
  updateOnlineSeller( asc: any) {
    console.log(asc);
    this.userService.updateAuthorizedServiceCenter(asc)
      .subscribe( res => {
        // console.log(res);
        alert('service center updated successfully');
        this.showDialog = false ;
        this.userService.getAuthorizedServiceCenterList() // list update after edit
          .subscribe(authorizedServiceCenterList => {
          this.authorizedServiceCenter = authorizedServiceCenterList;
        });
    });
  }
  // delete
  deleteAuthorizedServiceCenter( asc: any) {
    console.log(asc);
    const brandId = {'ID': asc.ID };
    this.userService.DeleteAuthorizedServiceCenter(brandId)
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
    this.userService.updateAuthorizedServiceCenter(data)
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
}

import { AuthorizedCenter } from './../../../../_models/authorizedCenter.interface';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
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
     this.authorizedServiceCenterForm = new FormGroup({
      Name: new FormControl(''),
      URL: new FormControl(''),
      GstinNo: new FormControl(''),
      ID: new FormControl(''),
      Details: new FormArray([])
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
    // console.log(item);
    // reset  editBrand form
    this.authorizedServiceCenterForm = new FormGroup({
      Name: new FormControl(''),
      URL: new FormControl(''),
      GstinNo: new FormControl(''),
      ID: new FormControl(''),
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
      this.authorizedServiceCenterForm.controls['URL'].setValue(res.URL);
      this.authorizedServiceCenterForm.controls['GstinNo'].setValue(res.GstinNo);
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
        this.userService.getAuthorizedServiceCenterList() // list update after edit
          .subscribe(authorizedServiceCenterList => {
          this.authorizedServiceCenter = authorizedServiceCenterList;
        });
    });
  }
}

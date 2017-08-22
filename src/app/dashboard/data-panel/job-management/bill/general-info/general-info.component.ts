import { Router, ActivatedRoute } from '@angular/router';
import { SubCategoryComponent } from './../../../category/sub-category/sub-category.component';
import { DataService } from './../../../../../_services/data.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {
  url:String;
  constructor(private dataservice:DataService,private router: Router) { }

  ngOnInit() {

  }
  generalFormData(form:NgForm){
    console.log(form.value);
    this.dataservice.getData(form.value);
    alert('General Information Added !!')
  }
}

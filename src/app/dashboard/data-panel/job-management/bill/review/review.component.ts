import { UserService } from './../../../../../_services/user.service';
import { appConfig } from './../../../../../app.config';
import { FinalBill } from './../../../../../_models/finalBill.interface';
import { DataService } from './../../../../../_services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  apiLink: String = appConfig.apiUrl;
  currentUser: any;
  TokenNo: String;
  finalData: any = {};
  serviceData:any;
  constructor(private dataservice: DataService, private userservice:UserService) {

  }

  ngOnInit() {
    this.serviceData = this.dataservice.resultArray;
    console.log(this.serviceData);
    this.finalData = {
      "BillID": this.serviceData[0].BillID,
      "UserID": this.serviceData[0].UserID,
      "InvoiceNo": this.serviceData[1].InvoiceNo,
      "Name": this.serviceData[1].Name,
      "EmailID": this.serviceData[1].EmailID,
      "PhoneNo": this.serviceData[1].PhoneNo,
      "DocID": 1,
      "TotalValue":this.serviceData[1].TotalValue,
      "Taxes": this.serviceData[1].Taxes,
      "DateofPurchase": this.serviceData[1].DateofPurchase,
      "BillImage": [1, 2], // it should be change
      "OnlineSellerID": this.serviceData[2],
      "SellerList": this.serviceData[3],
      "ProductList": [{
        "ProductName": this.serviceData[4].ProductName,
        "Value": this.serviceData[4].Value,
        "Taxes": this.serviceData[4].Taxes,
        "Tag": this.serviceData[4].Tag,
        "BrandID": this.serviceData[4].BrandID,
        "ColorID": this.serviceData[4].ColorID,
        "MasterCatID": this.serviceData[4].MasterCatID,
        "CatID": this.serviceData[4].CatID,
        "ProductForm": [ this.serviceData[5]
        ],
        "InsuranceList": [{
          "Plan": "sadsad",
          "PolicyNo": "sad",
          "AmountInsured": "1000",
          "PremiumType": "Yearly",
          "PremiumAmount": "100",
          "PolicyEffectiveDate": "2017-08-17",
          "PolicyExpiryDate": "2018-08-17",
          "BrandID": null,
          "SellerInfo": 1,
          "Inclusions": [1, 2],
          "Exclusions": [1, 2],
          "InsuranceImage": [1]
        }],
        "WarrantyList": [{
          "WarrantyType": "Warranty",
          "PolicyNo": "sadad",
          "PremiumType": "Yearly",
          "PremiumAmount": "2000",
          "PolicyEffectiveDate": "2017-08-17",
          "PolicyExpiryDate": "2018-08-17",
          "BrandID": 1,
          "SellerInfo": null,
          "Inclusions": [1, 2],
          "Exclusions": [1, 2],
          "WarrantyImage": [1]
        }],
        "AMCList": [{
          "PolicyNo": "sd",
          "PremiumType": "Yearly",
          "PremiumAmount": "200",
          "PolicyEffectiveDate": "",
          "PolicyExpiryDate": "",
          "BrandID": null,
          "SellerInfo": 1,
          "Inclusions": [1, 2],
          "Exclusions": [1, 2],
          "AMCImage": [2]
        }],
        "RepairList": [{
          "RepairValue": "200",
          "Taxes": "20",
          "RepairInvoiceNumber": "123456",
          "RepairDate": "2017-08-17",
          "BrandID": null,
          "SellerInfo": 1,
          "RepairImage": [1]
        }]
      }]
    }
  }
  submitData() {
    console.log(this.finalData);
    this.userservice.createBill(this.finalData)
      .subscribe(res=>{
        console.log(res);
      })
  }
}

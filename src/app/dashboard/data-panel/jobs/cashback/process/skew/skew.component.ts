import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-skew',
  templateUrl: './skew.component.html',
  styleUrls: ['./skew.component.css']
})
export class SkewComponent implements OnInit {
  @Input() jobDetails: any;
  skus: any;
  skuMeasurement: any;
  skuData: any = [];
  skuItems: any = [];
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    console.log("from parent", this.jobDetails)
    if (this.jobDetails) {
      this.skus = this.jobDetails.products[0].expense_skus;
      this.skus.map((item, index) => {
        let res = item.sku_measurement_details.filter(sku =>
          sku.id == item.sku_measurement_id
        )
        this.skuData.push({ 'id': item.id, 'name': item.sku_details.title, 'measurement_value': res[0].measurement_value, 'measurement_type': res[0].measurement_type.acronym, 'pack_numbers': res[0].pack_numbers, 'cashback_percent': res[0].cashback_percent });
        console.log(res);
      })
      console.log(this.skuData)
    }
  }
  cashback(res: NgForm) {

  }
}

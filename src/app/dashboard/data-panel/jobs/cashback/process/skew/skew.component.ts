import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skew',
  templateUrl: './skew.component.html',
  styleUrls: ['./skew.component.css']
})
export class SkewComponent implements OnInit {
  @Input() jobDetails: any;
  skus: any;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes) {
    console.log("from parent", this.jobDetails)
    if (this.jobDetails) {
      this.skus = this.jobDetails.products[0].expense_skus;
      console.log("sku", this.skus)
    }

  }
}

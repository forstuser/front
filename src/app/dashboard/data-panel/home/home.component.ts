import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../_services/user.service';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any;
  userType: number;
  imageUrl: string = '../../../assets/images/loader.gif';
  loader: boolean = false;
  start_date: any = '';
  end_date: any = '';
  dateWiseObject: any;
  users: Object;
  products: Object;
  warranties: Object;
  insurances: Object;
  amcs: Object;
  repairs: Object;
  pucs: Object;
  usersData: Array<any> = [];
  productsData: Array<any> = [];
  warrantiesData: Array<any> = [];
  insurancesData: Array<any> = [];
  amcsData: Array<any> = [];
  repairsData: Array<any> = [];
  pucsData: Array<any> = [];
  graphAvailable: boolean = false;
  cat: any;
  catId: any = '';
  userList: any;
  productList: any;
  userListShow: boolean = false;
  dataTable: boolean = true;
  productListShow: boolean = false;
  offset = 0;
  leftFlag: boolean = true;
  rightFlag: boolean = false;
  noData: boolean = false;
  calltext: any;
  // lineChart
  public lineChartData: Array<any> = [{}];
  public lineChartLabels: Array<any> = [];
  public lineChartColors: Array<any> = [
    { backgroundColor: 'green', borderColor: "green" },
    { backgroundColor: 'blue', borderColor: "blue" },
    { backgroundColor: 'red', borderColor: "red" },
    { backgroundColor: 'orange', borderColor: "orange" },
    { backgroundColor: 'black', borderColor: "black" },
    { backgroundColor: '#f78fb3', borderColor: "#f78fb3" },
    { backgroundColor: 'indigo', borderColor: "indigo" },
    { backgroundColor: '#0be881', borderColor: "#0be881" }];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';
  public lineChartOptions: any = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    elements: {
      line: {
        fill: false
      }
    }
  };

  constructor(private userService: UserService) {
    this.info = JSON.parse(localStorage.getItem('currentUser'));
    // console.log(this.info);
    this.userType = this.info.role_type;
  }

  ngOnInit() {
    this.getGraphData();
    this.getCategoryList()
  }
  // get list of category
  getCategoryList() {
    this.userService.getCategoryList(2) // 2 for category refer to api doc
      .subscribe(res => {
        this.cat = res.data;
        // console.log('category is ', this.cat);
      });
  }
  onSelectCat(catID: number) {
    console.log(catID);
    this.catId = catID;
  }


  public chartClicked(e: any): void {
    console.log(e);
    console.log("chart clicked")
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  getStartDate(e) {
    console.log(e);
    this.start_date = e;
  }
  getEndDate(e) {
    console.log(e);
    this.end_date = e;
  }
  filterDate() {
    this.getGraphData();
  }
  // get data for graph
  getGraphData() {
    this.graphAvailable = false;
    this.lineChartData = [];
    this.lineChartLabels = [];
    this.usersData = [];
    this.productsData = [];
    this.warrantiesData = [];
    this.insurancesData = [];
    this.amcsData = [];
    this.repairsData = [];
    this.pucsData = [];
    this.loader = true;
    this.userService.getGraphData(this.start_date, this.end_date, this.catId)
      .subscribe(res => {
        // console.log("res", res);
        this.graphAvailable = true;
        this.loader = false;
        this.userListShow = false;
        this.productListShow = false;
        this.dateWiseObject = res.data.dateWise;
        this.lineChartLabels = Object.keys(res.data.dateWise);
        for (let val in this.dateWiseObject) {
          // console.log(this.dateWiseObject[val]);
          this.usersData.push(this.dateWiseObject[val].users);
          this.productsData.push(this.dateWiseObject[val].products);
          this.warrantiesData.push(this.dateWiseObject[val].warranties);
          this.insurancesData.push(this.dateWiseObject[val].insurances);
          this.amcsData.push(this.dateWiseObject[val].amcs);
          this.repairsData.push(this.dateWiseObject[val].repairs);
          this.pucsData.push(this.dateWiseObject[val].pucs);
        }
        this.users = { 'data': this.usersData, 'label': 'New Users' }
        this.products = { 'data': this.productsData, 'label': 'Products' }
        this.warranties = { 'data': this.warrantiesData, 'label': 'Warranties' }
        this.insurances = { 'data': this.insurancesData, 'label': 'Insurances' }
        this.amcs = { 'data': this.amcsData, 'label': 'Amcs' }
        this.repairs = { 'data': this.repairsData, 'label': 'Repairs' }
        this.pucs = { 'data': this.pucsData, 'label': 'Pucs' }
        this.lineChartData.push(this.users, this.products, this.warranties, this.insurances, this.amcs, this.repairs, this.pucs);
      }, error => {
        console.log(error);
        this.loader = false;
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      })
  }

  getData(e) {
    this.offset = 0;
    console.log(e);
    this.calltext = e.label;
    if (e.label == 'New Users') {
      this.getDashboardList('users');
    }
    else if (e.label == 'Products') {
      this.getDashboardList('products');
    }
    else if (e.label == 'Warranties') {
      this.getDashboardList('warranties');
    }
    else if (e.label == 'Insurances') {
      this.getDashboardList('insurances');
    }
    else if (e.label == 'Amcs') {
      this.getDashboardList('amcs');
    }
    else if (e.label == 'Repairs') {
      this.getDashboardList('repairs');
    }
    else if (e.label == 'Pucs') {
      this.getDashboardList('pucs');
    }
    else {
      this.userListShow = false;
      this.productListShow = false;
    }
  }
  getDataByPagination() {
    console.log("inside pagination ", this.calltext)
    if (this.calltext == 'New Users') {
      this.getDashboardList('users');
    }
    else if (this.calltext == 'Products') {
      this.getDashboardList('products');
    }
    else if (this.calltext == 'Warranties') {
      this.getDashboardList('warranties');
    }
    else if (this.calltext == 'Insurances') {
      this.getDashboardList('insurances');
    }
    else if (this.calltext == 'Amcs') {
      this.getDashboardList('amcs');
    }
    else if (this.calltext == 'Repairs') {
      this.getDashboardList('repairs');
    }
    else if (this.calltext == 'Pucs') {
      this.getDashboardList('pucs');
    }
    else {
      this.userListShow = false;
      this.productListShow = false;
    }
  }
  getDashboardList(type) {
    this.userService.getDashboardData(type, this.start_date, this.end_date, this.catId, this.offset)
      .subscribe(res => {
        console.log(res);
        // products
        if (res.data.products) {
          if (res.data.products.length == 0) {
            this.noData = true;
            this.rightFlag = true;
          }
          this.noData = false;
          this.rightFlag = false;
          this.productList = res.data.products;
          this.userListShow = false;
          this.productListShow = true;
        }
        // users
        else if (res.data.users) {
          if (res.data.users.length == 0) {
            this.noData = true;
            this.rightFlag = true;
          }
          this.noData = false;
          this.rightFlag = false;
          this.userList = res.data.users;
          this.userListShow = true;
          this.productListShow = false;
        }
        // warranties
        else if (res.data.warranties) {
          if (res.data.warranties.length == 0) {
            this.noData = true;
            this.rightFlag = true;
          }
          this.noData = false;
          this.rightFlag = false;
          this.productList = res.data.warranties;
          this.userListShow = false;
          this.productListShow = true;
        }
        // insurances
        else if (res.data.insurances) {
          if (res.data.insurances.length == 0) {
            this.noData = true;
            this.rightFlag = true;
          }
          this.noData = false;
          this.rightFlag = false;
          this.productList = res.data.insurances;
          this.userListShow = false;
          this.productListShow = true;
        }
        // amcs
        else if (res.data.amcs) {
          if (res.data.amcs.length == 0) {
            this.noData = true;
            this.rightFlag = true;
          }
          this.noData = false;
          this.rightFlag = false;
          this.productList = res.data.amcs;
          this.userListShow = false;
          this.productListShow = true;
        }
        // repairs
        else if (res.data.repairs) {
          if (res.data.repairs.length == 0) {
            this.noData = true;
            this.rightFlag = true;
          }
          this.noData = false;
          this.rightFlag = false;
          this.productList = res.data.repairs;
          this.userListShow = false;
          this.productListShow = true;
        }
        // pucs
        else if (res.data.pucs) {
          if (res.data.pucs.length == 0) {
            this.noData = true;
            this.rightFlag = true;
          }
          this.noData = false;
          this.rightFlag = false;
          this.productList = res.data.pucs;
          this.userListShow = false;
          this.productListShow = true;
        }
      }, error => {
        console.log(error);
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      })
  }

  // function for pagination
  left() {
    this.leftFlag = true;
    this.rightFlag = false;
    this.noData = false;
    if (this.offset > 1) {
      this.offset = this.offset - 250;
      this.leftFlag = false;
    }
    this.getDataByPagination();
  }
  right() {
    this.noData = false;
    this.leftFlag = false;
    this.offset = this.offset + 250;
    this.getDataByPagination();
  }
}

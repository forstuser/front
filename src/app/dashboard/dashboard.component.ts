import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  message: boolean = true;
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.currentMessage.subscribe(message => this.message = message)
  }


}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../_services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: String;
  message: string;
  constructor(private dataService: DataService) {
    const info = JSON.parse(localStorage.getItem('currentUser'))
    this.name = info.full_name || 'User';
  }

  ngOnInit() {

  }
  hidePanel() {
    // this.dataService.currentMessage.subscribe(message => this.message = message)
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [];
  constructor(apiService: ApiService) {
    apiService.getOne().subscribe(res => this.items.push(res))
    apiService.getTwo().subscribe(res => this.items.push(res))
    apiService.getThree().subscribe(res => this.items.push(res))
    apiService.getFour().subscribe(res => this.items.push(res))
    apiService.getFive().subscribe(res => this.items.push(res))
    apiService.getSix().subscribe(res => this.items.push(res))
  }

  title = 'angular-http-interceptor';
}

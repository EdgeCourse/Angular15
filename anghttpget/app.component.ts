import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular HTTP Demo</h1>
    <button (click)="fetchData()">Fetch Data</button>
    <ul>
      <li *ngFor="let item of data">{{ item.title }}</li>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {}

  fetchData() {
    this.dataService.fetchData().subscribe((response) => {
      this.data = response;
    });
  }
}

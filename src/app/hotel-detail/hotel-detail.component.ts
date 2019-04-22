import { Component, OnInit } from '@angular/core';
// import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  navItems: any;
  // constructor(private http: Http) { }

  ngOnInit() {
    this.loadNavItems();
  }

  loadNavItems() {
    // this.navItems = this.http.get("../json_data/data.json");
    console.log(this.navItems);
}
}

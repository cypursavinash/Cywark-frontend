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
  locationName: string;
  locationState:string = "Gujarat";
  locationCity:string = "Ahmedabad";
  locationPlace : string;
  offersList:Array<any>;
  ngOnInit() {
    this.loadNavItems();
     
    this.init();
    this.offersList = []


    this.offersList = [
      {"styleClass":"fa fa-snowflake-o","label":"Ac Area"},
      {"styleClass":"fa fa-plug","label":"Plugs"},
      {"styleClass":"fa fa-shower","label":"Toilet"}
    ]
   }
  

  loadNavItems() {
    // this.navItems = this.http.get("../json_data/data.json");
    console.log(this.navItems);
}
 

init(){
this.locationName = "Royal plaza"
this.locationPlace = this.locationCity;//+" , "+this.locationState;
this.offersList = []
}
}
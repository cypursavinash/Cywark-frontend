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
  offersList1:Array<any>;
  offersList2:Array<any>;
     offersList3:Array<any>;
  price:string;
  ngOnInit() {
    this.loadNavItems();
     
    this.init();
    this.offersList1 = []
    this.offersList2 = []
    this.offersList3 = []
    this.offersList1 = [
      {"styleClass":"fa fa-snowflake-o","label":"Ac  "},
      {"styleClass":"fa fa-plug","label":"Plugs"},
      {"styleClass":"fa fa-shower","label":"Toilet"}
    ]
    this.offersList2 = [
      {"styleClass":"fa fa-clock-o","label":"Secure  "},
      {"styleClass":"fa fa-cutlery","label":"Food"},
      {"styleClass":"fa fa-video-camera","label":"CCTV"}
    ]
    this.offersList3 = [
      {"styleClass":"fa fa-credit-card-alt","label":"E-cash  "},
      {"styleClass":"fa fa-cutlery","label":"Plugs"},
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
this.offersList1 = []
this.price="24000";
}
}
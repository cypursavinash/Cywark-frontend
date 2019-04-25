import { Component, OnInit } from '@angular/core';
import { DebugRenderer2 } from '@angular/core/src/view/services';
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
  // more:string = "more";
 
  funValue:string="More";

  name1:string="";
  locationPlace : string;
  offersList1:Array<any>;
  offersList2:Array<any>;
     offersList3:Array<any>;
  price:string;
  fun: string;
  value1 = '';
    


  moreFacility(value: string)
  {
    // debugger;
    this.value1 = value;
    console.log(this.value1);
    
    if(this.value1 == "More"){
      debugger;
     this.funValue = "Less";
     this.name1 = this.funValue;
    }
    else{
     this.funValue = "More";
     this.name1 = this.funValue;
    }
   
   debugger;

  }

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
this.fun=this.funValue;

}
}
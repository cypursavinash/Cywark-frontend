import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegComponent } from './reg/reg.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { TestService } from './/test.service';
import { DetailComponent } from './detail/detail.component';
import { BookNowComponent } from './GItbooknow/book-now.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
// import { Http, Response } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material';
const routes: Routes = [
  {path:'register',component:RegComponent},
  {path:'login',component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    LoginComponent,
    DetailComponent,
    BookNowComponent,
    HotelDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,MatButtonModule, MatCheckboxModule,
    MatExpansionModule,
    MatCardModule
    // Http
  ],
  exports:[

    MatButtonModule, MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
 

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
    AngularFontAwesomeModule
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
 

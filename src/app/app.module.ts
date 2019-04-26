import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegComponent } from './reg/reg.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { User } from './services/user.model';
import { DetailComponent } from './detail/detail.component';
import { BookNowComponent } from './GItbooknow/book-now.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
// import { Http, Response } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
 
import { MatCardModule } from '@angular/material';
import { FirebaseComponent } from './firebase/firebase.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule, AngularFireDatabase,   } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore'

import { environment } from 'src/environments/environment';
import { UserInfoComponent } from './user-info/user-info.component';
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
    HotelDetailComponent,
    FirebaseComponent,
    UserInfoComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatCardModule,
    AngularFirestoreModule
    // Http
  ],
  exports:[

    MatButtonModule, MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
 
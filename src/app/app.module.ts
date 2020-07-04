import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ChocolateComponent } from './chocolate/chocolate.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { OnlineComponent } from './online/online.component';
import { NgoComponent } from './ngo/ngo.component';
import { LoginComponent } from './login/login.component';
import { GiftComponent } from './gift/gift.component';
import { JobsComponent } from './jobs/jobs.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SubfooterComponent } from './subfooter/subfooter.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Dialog1Component } from './dialog1/dialog1.component';
import { Dialog2Component } from './dialog2/dialog2.component';
import { Dialog3Component } from './dialog3/dialog3.component';
import { Dialog4Component } from './dialog4/dialog4.component';
import {MatDialogModule} from '@angular/material/dialog';
import { Dialog5Component } from './dialog5/dialog5.component';
import { Dialog6Component } from './dialog6/dialog6.component';
import { Dialog7Component } from './dialog7/dialog7.component';
import { Dialog8Component } from './dialog8/dialog8.component';
import { Dialog9Component } from './dialog9/dialog9.component';
import { Dialog10Component } from './dialog10/dialog10.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    AboutComponent,
    ChocolateComponent,
    CoffeeComponent,
    OnlineComponent,
    NgoComponent,
    LoginComponent,
    GiftComponent,
    JobsComponent,
    ContactusComponent,
    SubfooterComponent,
    HomeComponent,
    Dialog1Component,
    Dialog2Component,
    Dialog3Component,
    Dialog4Component,
    Dialog5Component,
    Dialog6Component,
    Dialog7Component,
    Dialog8Component,
    Dialog9Component,
    Dialog10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatToolbarModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [
    Dialog1Component,
    Dialog2Component,
    Dialog3Component,
    Dialog4Component,
    Dialog5Component,
    Dialog6Component,
    Dialog7Component,
    Dialog8Component,
    Dialog9Component,
    Dialog10Component
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

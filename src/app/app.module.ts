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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

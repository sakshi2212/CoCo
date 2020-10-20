import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChocolateComponent } from './chocolate/chocolate.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { OnlineComponent } from './online/online.component';
import { NgoComponent } from './ngo/ngo.component';
import { GiftComponent } from './gift/gift.component';
import { JobsComponent } from './jobs/jobs.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ResponseComponent } from './response/response.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'chocolate', component: ChocolateComponent },
  {path: 'coffee', component: CoffeeComponent },
  {path: 'online', component: OnlineComponent },
  {path: 'ngo', component: NgoComponent },
  {path: 'login', component: LoginComponent },
  {path: 'gift', component: GiftComponent },
  {path: 'jobs', component: JobsComponent },
  {path: 'contactus', component: ContactusComponent },
  {path: 'checkout' , component : CheckoutComponent},
  {path: 'response' , component : ResponseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

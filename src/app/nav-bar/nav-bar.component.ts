import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  route: string;

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if (location.path() !== ''){
        this.route = location.path();
      } else {
        this.route = 'Home';
      }
      if (this.route === '/about'){
        this.route = 'About Us';
      }
      else if (this.route === '/home'){
        this.route = 'CoCho';
      }
      else if (this.route === '/chocolate'){
        this.route = 'Our Chocolates';
      }
      else if (this.route === '/coffee'){
        this.route = 'Our Coffees';
      }
      else if (this.route === '/ngo'){
        this.route = 'Smile NGO';
      }
      else if (this.route === '/gift'){
        this.route = 'The Ring Club';
      }
      else if (this.route === '/online'){
        this.route = 'Order Online';
      }
      else if (this.route === '/gift'){
        this.route = 'The Ring Club';
      }
      else if (this.route === '/login'){
        this.route = 'Login / Sign Up';
      }
      else if (this.route === '/jobs'){
        this.route = 'Get Hired';
      }
      else if (this.route === '/contactus'){
        this.route = 'Let\'s Connect';
      }
      else if (this.route === '/checkout'){
        this.route = 'Order Placed';
      }
      else if (this.route === '/response'){
        this.route = 'Thank for your Response';
      }
    });
  }
  ngOnInit() {
  }
}

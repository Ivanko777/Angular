import { Component } from '@angular/core';
import { Product } from './interface/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle = true

  phones: Product[] = [
    {
      name: 'iPhone 12',
      amount: 7,
      price: 1000,
      color: 'Blue',
      memory: 128

    },
    {
      name: 'iPhone X',
      amount: 3,
      price: 800,
      color: 'Blue',
      memory: 64

    },
    {
      name: 'iPhone 7',
      amount: 5,
      price: 500,
      color: 'Blue',
      memory: 32

    },
    {
      name: 'iPhone 12 Pro',
      amount: 3,
      price: 1200,
      color: 'Gold',
      memory: 256,

    }
  ]

  toggleCards() {
    this.toggle = !this.toggle
  }

  title = 'ng-basic';
}

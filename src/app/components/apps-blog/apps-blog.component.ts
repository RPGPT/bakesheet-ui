
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { TablerIconsModule } from 'angular-tabler-icons';
import { Product } from 'src/app/models/product';

@Component({
    selector: 'app-blog',
    imports: [MatCardModule, MatChipsModule, TablerIconsModule, MatButtonModule, MatIconModule],
    templateUrl: './apps-blog.component.html'
})
export class AppBlogComponent {
  constructor() { }

  productcards: Product[] = [
    {
      id: 1,
      imgSrc: '/assets/images/products/p1.jpg',
      title: 'Boat Headphone',
      price: '285',
      recipe: [
        {
          ingredient:
          {
            name: 'flour',
            price: 2,

          },
          quantity: 5,
        },
      ],
    },
    {
      id: 2,
      imgSrc: '/assets/images/products/p2.jpg',
      title: 'MacBook Air Pro',
      price: '285',
      recipe: [
        {
          ingredient:
          {
            name: 'flour',
            price: 2,

          },
          quantity: 5,
        },
      ],
    },
    {
      id: 3,
      imgSrc: '/assets/images/products/p3.jpg',
      title: 'Red Valvet Dress',
      price: '285',
      recipe: [
        {
          ingredient:
          {
            name: 'flour',
            price: 2,

          },
          quantity: 5,
        },
      ],
    },
    {
      id: 4,
      imgSrc: '/assets/images/products/p4.jpg',
      title: 'Cute Soft Teddybear',
      price: '285',
      recipe: [
        {
          ingredient:
          {
            name: 'flour',
            price: 2,

          },
          quantity: 5,
        },
      ],
    }
  ]
}

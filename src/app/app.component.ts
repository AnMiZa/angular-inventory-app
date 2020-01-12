import {Component} from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-inventory-app';
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'NICEHAT',
        'A nice cowboy hat',
        '/assets/images/products/black-hat.jpg',
        ['Man', 'Accessories', 'Hats',],
        13.99
      ),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        239.99
      ),
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        99.99
      )
    ];
  }

  productWasSelected(product: Product): void {
    console.log(`Product clicked ${product}`);
  }

}

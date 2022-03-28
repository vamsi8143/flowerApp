import { Component, OnInit } from '@angular/core';
interface Products {
  sno: string;
  name: string;
  image: string;
  price: number;
  qty: number;
}
@Component({
  selector: 'app-shopping-items',
  templateUrl: './shopping-items.component.html',
  styleUrls: ['./shopping-items.component.css'],
})
export class ShoppingItemsComponent implements OnInit {
  public products: Products[] = [
    {
      sno: 'mi252',
      name: 'Mi watch',
      image: 'assets/img/watch.png',
      price: 1200,
      qty: 0,
    },
    {
      sno: 'App121',
      name: 'Apple watch',
      image: 'assets/img/appwatch.png',
      price: 2000,
      qty: 0,
    },
    {
      sno: 'Redmi 101',
      name: 'redmi watch',
      image: 'assets/img/rdemi.png',
      price: 1400,
      qty: 0,
    },
    {
      sno: 'oppo23',
      name: 'Oppo watch',
      image: 'assets/img/oppowatch.png',
      price: 1800,
      qty: 0,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  public updateQty(productId: string, num: number): void {
    this.products = this.products.map((product) => {
      if (product.sno === productId) {
        return {
          ...product,
          qty: product.qty + num > 0 ? product.qty + num : 0,
        };
      } else {
        return product;
      }
    });
  }

  public totalAmount(): number {
    let total: number = 0;
    for (let product of this.products) {
      total += product.price * product.qty;
    }
    return total;
  }
}

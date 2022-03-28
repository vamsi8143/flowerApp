import { Component, OnInit, Input } from '@angular/core';
interface Products {
  sno: string;
  name: string;
  image: string;
  price: number;
  qty: number;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: Products | undefined;
  constructor() {}

  ngOnInit(): void {}
}

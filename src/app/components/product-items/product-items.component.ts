import { Component, OnInit } from '@angular/core';
export interface Product {
  sr_no: string;
  name: string;
  image: string;
  price: number;
  qty: number;
}
@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css'],
})
export class ProductItemsComponent implements OnInit {
  public product: Product = {
    sr_no: 'mi090',
    name: 'mi watch',
    image:
      'https://www.google.com/search?q=smart+watch+images&sxsrf=APq-WBu9V4rtvGwtI-1fmNH5o87ZHnwAuQ:1646801998352&tbm=isch&source=iu&ictx=1&vet=1&fir=XOJSZTpjSmt_jM%252CG7lBoik2rnrcVM%252C_%253BW7wFpBpPzUyIGM%252C3sA7brpyWRgHxM%252C_%253BXkpxPQ3_3x38lM%252CIOCryFPOQZWYcM%252C_%253BGhz2Hyi0H0Da9M%252CZWE526pvLYPaVM%252C_%253BVyj7Loh8-BfdbM%252CIOCryFPOQZWYcM%252C_%253BTh7xu-A1nA7CnM%252Ch6axu1opz_CixM%252C_%253BU1COioVN-_SiYM%252CIOCryFPOQZWYcM%252C_%253BjbJr_W_1W_PTSM%252Ch6axu1opz_CixM%252C_%253Bhh0vJHS8nrVCMM%252CZWE526pvLYPaVM%252C_%253BF3wI956XSp_KgM%252Cv4pWWS62n4BZ5M%252C_%253BSB8sY1eF3LXuTM%252C8V9FY3DVtIJxaM%252C_%253BBiRCGyzGy-2iFM%252CNW-jaC3Ohy095M%252C_%253B9Nnc8i6_S25M-M%252CJTeSHfr1r2PjvM%252C_%253BySlEbJhGULBEsM%252CPG8OG-68CKPVaM%252C_&usg=AI4_-kRO4nrDMy191iERKHKh_o9Jhb6wuw&sa=X&ved=2ahUKEwjK9oHBn7j2AhULSWwGHR4nBKMQ9QF6BAgDEAE#imgrc=W7wFpBpPzUyIGM',
    price: 1500,
    qty: 1,
  };
  public updateQty(num: number) {
    this.product = {
      ...this.product,
      qty: this.product.qty + num > 0 ? this.product.qty + num : 1,
    };
  }
  constructor() {}

  ngOnInit(): void {}
}

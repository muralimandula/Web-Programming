import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartObjArr = [];
  cartIndex:Array<number> = [];

  constructor(public data : ProductsService,
    private cartService: CartService) {
      
    this.cartObjArr = cartService.getCartItem();
    this.cartIndex = cartService.getCartIndices();
   }

  ngOnInit() {

  }

}
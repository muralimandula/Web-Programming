import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cblank: boolean;
  cinfo: boolean;
  cname;
  cphone;
  caddress;
  cartObjArr = [];
  cartIndex:Array<number> = [];

  constructor(public data : ProductsService,
    private cartService: CartService) {
      
    this.cartObjArr = cartService.getCartItem();
    this.cartIndex = cartService.getCartIndices();
   }

  ngOnInit() {

  }
  purchase() {
    if((this.cname == null || ((this.cphone == null)||(this.caddress == null)))) {
      this.cblank = true;
    } else {
    this.cinfo = true;
    this.cblank = false;
    // this.data.cartquantity = 0;
    // this.cartService.updateHistory();
  }
}

  order() {
    for(var i =0; i< this.cartObjArr.length ; i++) {
      var temp = (this.cartObjArr[i].quantity - this.cartService.quantity[i]);
      this.cartService.updateQuantity(this.cartObjArr[i]._id, temp);
    }
    this.data.cartquantity = 0;
  }

}
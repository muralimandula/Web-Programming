import { Component, OnInit,Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item-details',
  templateUrl: './cart-item-details.component.html',
  styleUrls: ['./cart-item-details.component.css']
})
export class CartItemDetailsComponent implements OnInit {
  
  @Input() index;
  cartObjArr = [];
  quantity:Number[];
  constructor(public c:CartService ) {
    this.cartObjArr = c.getCartItem();
    this.quantity = c.getQuantity();
    // console.log(this.index);
   }
   remove(){
    this.c.removeFromCart(this.index);
   }
   decrease(){
     this.c.decreaseCart(this.index);
   }
   increase(){
    this.c.increaseCart(this.index);
  }
  ngOnInit() {
    this.quantity = this.c.getQuantity();
  }

}

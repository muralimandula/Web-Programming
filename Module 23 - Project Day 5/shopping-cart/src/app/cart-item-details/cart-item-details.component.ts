import { Component, OnInit,Input } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductsService} from '../products.service';


@Component({
  selector: 'app-cart-item-details',
  templateUrl: './cart-item-details.component.html',
  styleUrls: ['./cart-item-details.component.css']
})
export class CartItemDetailsComponent implements OnInit {
  
  @Input() index;
  cartObjArr = [];
  quantity = [];
  flag: boolean;
  constructor(public c:CartService, public data: ProductsService) {
    
    this.cartObjArr = c.getCartItem();
    this.quantity = c.getQuantity();
    // console.log(this.index);
   }

   
   remove(){
    this.data.totalBill -= this.cartObjArr[this.index].price * this.quantity[this.index];
    this.data.cartquantity -= this.quantity[this.index];
    this.c.removeFromCart(this.index);
    // console.log("after" + this.data.totalBill +"before" + this.cartObjArr[this.index].price + "m=seeul"+ this.quantity[this.index]);

   }
   decrease(){
    document.getElementById("mine").style.visibility = "visible";
    this.data.cartquantity -= 1;    
    this.data.totalBill -= this.cartObjArr[this.index].price;
    this.c.decreaseCart(this.index);
   }
   increase(){
    if(this.quantity[this.index] < this.cartObjArr[this.index].quantity) {
      this.data.cartquantity += 1;    
      this.data.totalBill += this.cartObjArr[this.index].price;
      this.c.increaseCart(this.index);
    } else {
        document.getElementById("mine").style.visibility = "hidden";
    }
  }
  ngOnInit() {
    this.quantity = this.c.getQuantity();
  }

}

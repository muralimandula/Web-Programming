import { Injectable } from '@angular/core';
import { ProductsService} from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  prods = [];
  cartArr = []
  cartIndex = [];
  quantity:Array<number>= [];
  constructor(public data : ProductsService) { 
    this.data.getData().subscribe((x)=> {this.prods = x});
  }
  addCartItem(index){
    // console.log(index);
    if(this.cartArr.indexOf(this.prods[index]) === -1){
    // this.cartArr.push(this.prods[index]);
    this.cartArr[index] = this.prods[index];
    console.log(this.cartArr);
    this.quantity[index] = 1;
    this.cartIndex[index] = index;
    console.log("cart Index: in addtocart if "+this.cartIndex);
  } else{
    this.quantity[index] = this.quantity[index] + 1;
    console.log("else:"+this.quantity[index]);
    console.log("cart Index: in addtocart else "+this.cartIndex)

  }
}
  getCartItem(){
    return this.cartArr;
    
  }
  removeFromCart(index){
    this.quantity[index] = 0;
    // this.cartIndex.splice(index,1);
    this.cartIndex[index] = null;
    this.cartArr[index] = null;
    console.log("Index: "+index)
    console.log("cart Index: "+this.cartIndex)
    console.log("indexOf: "+this.cartIndex.indexOf(index))
  }
  decreaseCart(index){
    console.log("quantity left:"+this.quantity[index]);
    if(this.quantity[index]>1) {
    this.quantity[index] = this.quantity[index] - 1;
    } else {
      this.removeFromCart(index);
    }
  }
  increaseCart(index){
    console.log("quantity left:"+this.quantity[index]);
    this.quantity[index] = this.quantity[index] + 1;
  }
  getCartIndices(){
    return this.cartIndex;
  }
  getQuantity(){
    // console.log(index);
    console.log((this.quantity));
    return this.quantity;
  }
}
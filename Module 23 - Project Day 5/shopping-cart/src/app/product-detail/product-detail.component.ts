 import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductsService} from '../products.service';
import {CartService} from '../cart.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  price;
  rvw;
  objt;
  ind;
  name;
  password;
  reviewObj;
  added:boolean = false;
  constructor(
    private route: ActivatedRoute,
    public data: ProductsService,
    private location: Location,
    private cartService: CartService
  ) {
    this.data.getData().subscribe( x => this.objt = x);
    this.ind = +this.route.snapshot.paramMap.get('i');
  }

  ngOnInit() {
  }
  addToCart(){
    // this.data.cartquantity += 1;
    this.added = true;
    this.data.totalBill += this.objt[this.ind].price;
    this.data.cartquantity +=1;
    this.cartService.addCartItem(this.ind);
  }

  getReview() {
    this.data.getReviews(this.objt[this.ind]._id).subscribe(x => {this.reviewObj = x})
  }
 
  review() {
    this.data.addReview(this.objt[this.ind]._id, this.rvw);
  }

}

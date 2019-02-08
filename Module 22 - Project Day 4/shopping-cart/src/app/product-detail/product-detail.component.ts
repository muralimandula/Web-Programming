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
  rvw;
  objt;
  ind;
  name;
  password;
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
    this.added = true;
    this.cartService.addCartItem(this.ind);
  }

  review() {
    this.data.addReview(this.ind, this.rvw);
  }

}

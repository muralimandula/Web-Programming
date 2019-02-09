import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../products.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username;
  password;
  password2;
  email;
  flag;
  accept;
  blank: boolean;
  nomatch: boolean;
  constructor(public productService: ProductsService,
    private router: Router) { }

  ngOnInit() {
  }

  submit() {
    if(((this.username == null)|| (this.password2 == null)) || ((this.password == null)|| (this.email == null))){
      this.blank = true;
    }else if(!(this.password === this.password2)){
      this.nomatch = true;
      this.password = "";
      this.password2 = "";

    }else{
      this.flag = this.productService.regLogin(this.username, this.password, this.email);
      this.flag.subscribe(x => {this.accept=x;});
    }
  }

  direct() {

  }
}

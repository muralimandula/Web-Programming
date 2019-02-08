import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ifloggedIN;
  username;
  password;
  flag: boolean; 
  fl: any;
  flg: boolean;
  lFlag:boolean = false;
  temp: boolean;
  blank: boolean;
  constructor(public data : ProductsService,
    private router: Router) { }

  ngOnInit() {
  }

  submit() {
    if((this.username == null)||(this.password == null)){
      this.blank = true;
    } else{  
      this. fl = this.data.checkLogin(this.username, this.password);
      this.fl.subscribe(x => {this.flag = x;
        if(this.flag === true) {
          this.data.ifloggedIN = true;
          this.data.loggedUser = this.username;
          this.router.navigate(['/home']);
        }else {
            this.temp = true;
            this.username ="";
            this.password ="";
        }
      });
    }
  }


}

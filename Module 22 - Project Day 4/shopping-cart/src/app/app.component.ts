import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import {ProductsService} from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products = [];
  prods = [];
  flag:boolean = false;
  title = 'shopping-cart';
  flg:boolean = false;
  constructor(public data: ProductsService) {
    this.data.getData().subscribe((x)=> {this.products = x;this.loadIt()});

  }
  ngOnInit() {
  }

  loggedOut(){
    this.data.ifloggedIN = false;
  }

  loadIt() {
    for(var i = 0; i < this.products.length; i++) {
        this.prods.push(this.products[i].name);
      }
    }

}

@Pipe({name: 'filterByName'})
export class filterNames implements PipeTransform {
  transform(listOfNames: string[], nameToFilter: string): string[] {
    if(!listOfNames) return null;
    if(!nameToFilter) return listOfNames;
    return listOfNames.filter(n => n.indexOf(nameToFilter) >= 0);
  }
}

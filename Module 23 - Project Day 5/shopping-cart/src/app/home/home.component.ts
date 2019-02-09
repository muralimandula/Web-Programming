import { Component, OnInit, Input } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { ProductsService} from '../products.service';
var productArray;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = [];
  prods = [];
  flag:boolean = false;
  constructor(public data : ProductsService) { 
    this.data.getData().subscribe((x)=> {while((productArray ===undefined)) productArray = x; this.products = x; this.loadIt()});
  }

  ngOnInit() {
  }

  loadIt() {
    for(var i = 0; i < this.products.length; i++) {
        this.prods.push(this.products[i].name);
    }
  }
}

@Pipe({name: 'filterByName'})
export class filterNames implements PipeTransform {
  construct() {}
  transform(listOfNames: string[], nameToFilter: string): number[] {
    if(!listOfNames || !nameToFilter) return null;
    listOfNames = listOfNames.filter(n => n.toLowerCase().indexOf(nameToFilter.toLowerCase()) !== -1);
    var cards = productArray;
    cards = cards.filter(card => listOfNames.includes(card.name));
    var indexArray: number[] = [];
    cards.forEach(card => indexArray.push(productArray.indexOf(card)));
    return indexArray;
  }
}
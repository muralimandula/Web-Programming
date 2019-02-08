import { Component, OnInit, Input } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { ProductsService} from '../products.service';

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
    this.data.getData().subscribe((x)=> {this.products = x;this.loadIt()});
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
  transform(listOfNames: string[], nameToFilter: string): string[] {
    if(!listOfNames) return null;
    if(!nameToFilter) return listOfNames;
    return listOfNames.filter(n => n.indexOf(nameToFilter) >= 0);
  }
}

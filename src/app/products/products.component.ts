import { Component } from '@angular/core';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',

  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products !: any
  valid = false
  constructor(public serv: ProductsService) {
    this.serv.get().subscribe(data => {
      if (data) {
        this.valid = true
        this.products = data
      }
    })

  }
}

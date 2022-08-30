import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/model/product';
import { ProductService } from 'src/app/services/products.services';
import { products as data } from 'src/app/data/product';
import { LocalStorageService } from 'src/app/services/local-storage.service';




@Component({
  selector: 'app-buy-pages',
  templateUrl: './buy-pages.component.html',
  styleUrls: ['./buy-pages.component.css']
})
export class BuyPagesComponent {
  products: IProduct[];

  @Input() product: IProduct

  details: boolean = false
  

  constructor(public localStorageService: LocalStorageService) { 
    this.getProducts();
  }

  removeProduct(productId: any) {
    let index = this.products.findIndex((el: any) => {return el.id == productId;})

    if(index >= 0) {
      this.products.splice(index, 1);
    }

    this.localStorageService.saveProducts(this.products);
  }

  getProducts() {
    this.products = this.localStorageService.getBuy();
  } 
}

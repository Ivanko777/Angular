import { Injectable } from '@angular/core';
import { IProduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  card: any;


  constructor() { }


  getBuy(): any[] {
    let tmp = localStorage.getItem('local');

    if (tmp) {
      let result = JSON.parse(tmp)
      return result;
    }

    return [];
  }



  buy(product: IProduct): void {
    let tmpLocal = localStorage.getItem('local')
    let storage = [];

    if (tmpLocal) {
      storage = JSON.parse(tmpLocal);
    }

    storage.push(product);
    localStorage.setItem('local', JSON.stringify(storage))

  }

  saveProducts(products: IProduct[]) {
    if(products) {
      localStorage.setItem('local', JSON.stringify(products));
    }
  }

}

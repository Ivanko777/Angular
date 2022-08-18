import { Component, OnInit } from '@angular/core';
import { IProduct } from './model/product';
import { products as data } from './data/product';
import { ProductService } from './services/products.services';
import { Observable, tap } from 'rxjs';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'fast-course-2022';

  // products: IProduct[] = []
  loading = false

  products$: Observable<IProduct[]>

  term=''
  constructor(private productsService: ProductService){

  }

  ngOnInit(): void {
    this.loading = true
    // this.productsService.getAll().subscribe(products =>{
    //   this.products = products
    //   this.loading = false
      
    // })
    this.products$ = this.productsService.getAll().pipe(
      tap(()=>this.loading = false )
    )
  }


}

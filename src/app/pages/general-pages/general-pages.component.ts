import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/products.services';


@Component({
  selector: 'app-general-pages',
  templateUrl: './general-pages.component.html',
  styleUrls: ['./general-pages.component.css']
})
export class GeneralPagesComponent implements OnInit {

  title = 'Show Room';

  // products: IProduct[] = []
  loading = false

  // products$: Observable<IProduct[]>

  term = ''
  constructor(
    public modalService: ModalService,
    public productsService: ProductService) {

  }


  ngOnInit(): void {
    this.loading = true
    this.productsService.getAll().subscribe(products => {

      this.loading = false

    })
    // this.products$ = this.productsService.getAll().pipe(
    //   tap(()=>this.loading = false )
    // )
  }



}

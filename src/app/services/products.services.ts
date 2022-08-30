import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http'
import { catchError, delay, Observable, throwError, tap } from "rxjs";
import { IProduct } from "../model/product";
import { ErrorService } from "./error.service";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(

        private http: HttpClient,
        private errorService: ErrorService

    ) {

    }

    products: IProduct[] = []

    getAll(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('https://fakestoreapi.com/products/category/electronics', {
            params: new HttpParams({
                fromObject: { limit: 7 }
            })
        }).pipe(delay(2000),
            tap(products => {
                this.products = products
            }),
            catchError(this.errorHandler.bind(this))
        )
    }

    create(product: IProduct): Observable<IProduct> {


        return this.http.post<IProduct>('https://fakestoreapi.com/products/', product)
            .pipe(
                tap(prod => {
                    if (prod.title == product.title) {
                        this.products.push(product);
                    }
                    else {
                        this.products.push(prod);
                    }
                }
                )
            )
    }

    private errorHandler(error: HttpErrorResponse) {
        this.errorService.handle(error.message)
        return throwError(() => error.message)
    };

}
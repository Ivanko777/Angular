import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http'
import { catchError, delay, Observable, throwError } from "rxjs";
import { IProduct } from "../model/product";
import { ErrorService } from "./error.service";

@Injectable ({
    providedIn: 'root'
})
export class ProductService {
    constructor(
        
        private http: HttpClient,
        private errorService : ErrorService
        
        ) {
         
    }

    getAll(): Observable<IProduct[]>{
      return  this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
        params: new HttpParams({
            fromObject: {limit:7}
        })
      }).pipe(delay (2000))
      
      catchError(this.errorHandler.bind(this));
      
    }

    private errorHandler(error: HttpErrorResponse){
        this.errorService.handle(error.message)
        return throwError( () => error.message)
    };
    
}
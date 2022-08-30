import { Input } from "@angular/core";
import { Component } from "@angular/core";
import { IProduct } from "src/app/model/product";
import { LocalStorageService } from "src/app/services/local-storage.service";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})

export class ProductComponent {
    @Input() product: IProduct

    details: boolean = false


    constructor(public localStorageService: LocalStorageService) { }
}

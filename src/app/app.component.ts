import { Component, OnInit } from '@angular/core';
import { IProduct } from './model/product';
import { products as data } from './data/product';
import { ProductService } from './services/products.services';
import { Observable, tap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ModalService } from './services/modal.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;

}

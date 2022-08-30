import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { GlobalErrorComponent } from './component/global-error/global-error.component';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { ModalComponent } from './component/modal/modal.component';
import { CreateProductComponent } from './component/create-product/create-product.component';
import { FocusDirective } from './derectives/focus.directive';
import { ModalService } from './services/modal.service';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { GeneralPagesComponent } from './pages/general-pages/general-pages.component';
import { BuyPagesComponent } from './pages/buy-pages/buy-pages.component';
import { AppRoutingModule } from './app-routing.module';
import { HelpPagesComponent } from './pages/help-pages/help-pages.component';
import { NavigationComponent } from './component/navigation/navigation.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponent,
    FilterProductsPipe,
    ModalComponent,
    CreateProductComponent,
    FocusDirective,
    HeaderComponent,
    FooterComponent,
    GeneralPagesComponent,
    BuyPagesComponent,
    HelpPagesComponent,
    NavigationComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

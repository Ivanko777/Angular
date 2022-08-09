import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { ModalComponent } from './modal/modal.component';
import { ServiceComponent } from './service/service.component';
import { ModalInfoComponent } from './modal-info/modal-info.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent,
    ModalComponent,
    ServiceComponent,
    ModalInfoComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

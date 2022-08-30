import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BuyPagesComponent } from "./pages/buy-pages/buy-pages.component";
import { GeneralPagesComponent } from "./pages/general-pages/general-pages.component";
import { HelpPagesComponent } from "./pages/help-pages/help-pages.component";

const routes: Routes = [
    { path: '', component: GeneralPagesComponent },
    { path: 'buy', component: BuyPagesComponent },
    { path: 'help', component: HelpPagesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
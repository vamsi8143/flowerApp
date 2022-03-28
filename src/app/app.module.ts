import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { WishesComponent } from './components/wishes/wishes.component';
import { CounterComponent } from './components/counter/counter.component';
import { ProductItemsComponent } from './components/product-items/product-items.component';
import { ShoppingItemsComponent } from './components/shopping-items/shopping-items.component';
import { SmsAppComponent } from './components/sms-app/sms-app.component';
import { FormsModule } from '@angular/forms';
import { ShowPasswordComponent } from './components/show-password/show-password.component';
import { ThemsComponent } from './components/thems/thems.component';
import { LoggedComponent } from './components/logged/logged.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    WishesComponent,
    CounterComponent,
    ProductItemsComponent,
    ShoppingItemsComponent,
    SmsAppComponent,
    ShowPasswordComponent,
    ThemsComponent,
    LoggedComponent,
    ProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

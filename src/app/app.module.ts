import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AddShowComponent } from './add-show/add-show.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { StoreComponent } from './store/store.component';
import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RegisterUserComponent,
    AddShowComponent,
    ContactComponent,
    AboutComponent,
    StoreComponent,
    LoginComponent,
    ShoppingCartComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'registerUser', component: RegisterUserComponent },
      { path: 'addShow', component: AddShowComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'store', component: StoreComponent },
      { path: 'login', component: LoginComponent },
      { path: 'shoppingCart', component: LoginComponent },
    ])
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

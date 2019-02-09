import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';
import { HomeComponent,  filterNames } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule,  ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule} from '@angular/common/http';
import { CartItemDetailsComponent } from './cart-item-details/cart-item-details.component';
@NgModule({
  declarations: [
    AppComponent,
    filterNames,
    HomeComponent,
    ProductDetailComponent,
    SignupComponent,
    LoginComponent,
    CartComponent,
    CartItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


  
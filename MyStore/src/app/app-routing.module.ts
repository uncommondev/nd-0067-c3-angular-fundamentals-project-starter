import { ProductlistComponent } from './product/productlist/productlist.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductpageComponent } from './product/productpage/productpage.component';
import { CartCheckoutComponent } from './cart/cart-checkout/cart-checkout.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  { path: '', component: ProductlistComponent },
  { path: 'checkout', component: CartCheckoutComponent },
  { path: 'product/:id', component: ProductpageComponent },
  { path: 'order', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

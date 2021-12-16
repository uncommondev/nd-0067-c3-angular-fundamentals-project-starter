import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';



@NgModule({
  declarations: [
    CartCheckoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CartCheckoutComponent
  ]
})
export class CartModule { }

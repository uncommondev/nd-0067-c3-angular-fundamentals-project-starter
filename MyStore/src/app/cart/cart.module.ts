import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CartCheckoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    CartCheckoutComponent
  ]
})
export class CartModule { }

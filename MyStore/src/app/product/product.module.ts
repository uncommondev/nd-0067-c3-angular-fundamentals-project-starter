import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductcartComponent } from './productcart/productcart.component';
import { ProductitemComponent } from './productitem/productitem.component';
import { FormsModule } from '@angular/forms';
import { ProductpageComponent } from './productpage/productpage.component';



@NgModule({
  declarations: [
    ProductlistComponent,
    ProductcartComponent,
    ProductitemComponent,
    ProductpageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ProductlistComponent,
    ProductcartComponent,
    ProductitemComponent
  ]
})
export class ProductModule { }

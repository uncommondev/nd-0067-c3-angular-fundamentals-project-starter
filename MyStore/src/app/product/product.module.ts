import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductitemComponent } from './productitem/productitem.component';
import { FormsModule } from '@angular/forms';
import { ProductpageComponent } from './productpage/productpage.component';



@NgModule({
  declarations: [
    ProductlistComponent,
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
    ProductitemComponent,
    ProductpageComponent
  ]
})
export class ProductModule { }

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderComponent } from './order/order.component';



@NgModule({
  declarations: [
    NavbarComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    OrderComponent 
  ]
})
export class ComponentsModule { }

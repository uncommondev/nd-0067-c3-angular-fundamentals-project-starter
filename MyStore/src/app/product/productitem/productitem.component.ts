import { CartService } from './../../../../services/cart.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import Product from 'models/product';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {
  @Input() product: Product
  quantity: number

  //@Output() addProductToCart: EventEmitter<Product> = new EventEmitter()

  constructor(private cart: CartService) { }

  ngOnInit(): void {
  }

  addToCart(){
    this.product.quantity = this.quantity
    this.cart.addToCart(this.product)
    window.alert(`${this.product.name} x ${this.product.quantity} have been added to your cart`)
    //this.addProductToCart.emit(this.product)
  }

}

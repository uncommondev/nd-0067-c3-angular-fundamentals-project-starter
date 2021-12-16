import  Product from 'models/product';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[]

  constructor() { 
    this.cart = []
  }

  addToCart(product: Product) {
    this.cart.push(product)
  }

  deleteFromCart(product: Product){
    const newCart = this.cart.filter(item => item.id !== product.id)
    this.cart = newCart
  }
}

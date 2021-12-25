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

  getCart(){
    console.log(`getCart`)
    console.log(this.cart)
    return this.cart
  }

  addToCart(product: Product) {
    this.cart.push(product)
    console.log(`addToCart`)
    console.log(this.cart)
  }

  deleteFromCart(id: number){
    const newCart = this.cart.filter(item => item.id !== id)
    this.cart = newCart
    console.log(`deleteFromCart`)
    console.log(this.cart)
  }

  updateQuantity(quantity: number, index: number){
    this.cart[index].quantity = quantity
    console.log(`updateQuantity`)
    console.log(this.cart)
  }

  cartTotal(): string {
    let total: number = 0
    this.cart.map(item => {
      total += item.price * (item.quantity || 1)
      console.log(`total`)
      console.log(total)
    })
    console.log(`Completed total`)
    console.log(total.toFixed(2))
    return(total.toFixed(2))
  }
}

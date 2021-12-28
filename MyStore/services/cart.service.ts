import  Product from 'models/product';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[]
  order: {
    fullname: string,
    address: string,
    total: string
  }

  constructor() { 
    this.cart = []
  }

  getCart(){
    console.log(`getCart`)
    console.log(this.cart)
    return this.cart
  }

  addToCart(product: Product) {
    let indexHolder = this.cart.findIndex(item => item.id === product.id)
    if (indexHolder >= 0) {
      console.log(`ID's DO match`)
      console.log(this.cart)
      let cQ = +this.cart[indexHolder].quantity
      console.log(`cQ`) 
      console.log(cQ) 
      let pQ = +product.quantity
      console.log(`pQ`) 
      console.log(pQ) 
      let tQ = +cQ + +pQ
      console.log(`tQ`) 
      console.log(tQ) 
      product.quantity = +tQ
      console.log(`product.quantity`) 
      console.log(product.quantity) 
      this.cart[indexHolder] = product
      console.log(`this.cart`)
      console.log(this.cart)
    }
    else if (indexHolder === -1) {
        console.log(`ID's DON'T match`)
        this.cart.push(JSON.parse(JSON.stringify(product)))
        console.log(`New Cart`)
        console.log(this.cart)
    }
    console.log(`Cart`)
    console.log(this.cart)
  }

  deleteFromCart(id: number){
    const newCart = this.cart.filter(item => item.id !== id)
    this.cart = newCart
    console.log(`deleteFromCart`)
    console.log(this.cart)
    window.alert(`Item Removed From Cart`)
  }

  updateQuantity(quantity: number, index: number){
    this.cart[index].quantity = quantity
    console.log(`updateQuantity`)
    console.log(this.cart)
    window.alert(`Updated Cart: ${this.cart[index].name} x ${this.cart[index].quantity}`)
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

  clearCart() {
    this.cart = []
  }

  populateOrder(fullname: string, address: string){
    this.order = {
      fullname,
      address,
      total: this.cartTotal()
    }
  }

  clearOrder(){
    this.order = {
      fullname: "",
      address: "",
      total: ""
    }
  }
}

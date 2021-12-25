import { CartService } from './../../../../services/cart.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Product from 'models/product';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent implements OnInit {
  cartItems: Product[]
  // Form Elements
  fullname: string = ""
  address: string = ""
  creditcard: number
  // Cart items
  cartTotal: string = this.cartService.cartTotal()

  @Output() createOrder: EventEmitter<any> = new EventEmitter()

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart()
    console.log(this.cartItems)
  }

  checkoutOrder() {
    // BLOC for order - if required
    // Proceed to pass the details to the next page -->
    // Add the event emitter
    const order = {
      fullname: this.fullname,
      address: this.address,
      creditcard: this.creditcard
    }

    this.createOrder.emit(order)

    this.fullname = ""
    this.address = ""
    this.creditcard
  }

  updateQuantity(index: number, quant: string ){// ev: Event){ //quantity: number){
    console.log(`Update Quantity Triggered`)
    console.log(`Quantity`)
    console.log(quant)
    console.log(`Index`)
    console.log(index)
    this.cartService.updateQuantity(+quant, index)
  }

  removeProduct(id: number){
    const newCart = this.cartItems.filter(item => item.id !== id)
    this.cartItems = newCart
    console.log(`deleteFromCart`)
    console.log(this.cartItems)
    this.cartService.deleteFromCart(id)
  }

}

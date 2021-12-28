import { CartService } from './../../../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import Product from 'models/product';
import { Router } from '@angular/router';

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


  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart()
    console.log(this.cartItems)
  }

  checkoutOrder() {
    this.cartService.populateOrder(this.fullname, this.address)
    this.fullname = ""
    this.address = ""
    this.creditcard
    this.cartItems = [] // Clears the cart
    this.cartService.clearCart()
    this.cartTotal = ""
    this.router.navigate(["/order"])
  }

  updateQuantity(index: number, quant: string ) {
    console.log(`Update Quantity Triggered`)
    console.log(`Quantity`)
    console.log(quant)
    console.log(`Index`)
    console.log(index)
    this.cartService.updateQuantity(+quant, index)
    this.cartTotal = this.cartService.cartTotal()
  }

  removeProduct(id: number){
    const newCart = this.cartItems.filter(item => item.id !== id)
    this.cartItems = newCart
    console.log(`deleteFromCart`)
    console.log(this.cartItems)
    this.cartService.deleteFromCart(id)
    this.cartTotal = this.cartService.cartTotal()
  }

}

import { HttpService } from './../../../../services/http.service';
import { Component, OnInit } from '@angular/core';
import Product from 'models/product';
import { CartService } from 'services/cart.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products: Product[] = []

  constructor(private httpService: HttpService, private cartService: CartService) { }

  ngOnInit(): void {
    this.httpService.getProducts().subscribe(data => {
      this.products = data
    })
  }

  addToCart(product: Product){
    console.log(`LIST - product`)
    console.log(product)
    this.cartService.addToCart(product)
    window.alert(`${product.name} x ${product.quantity} have been added to your cart`)
  }

}
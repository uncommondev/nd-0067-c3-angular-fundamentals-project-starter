import { CartService } from './../../../../services/cart.service';
import { HttpService } from './../../../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import Product from 'models/product';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
  products: Product[] = []
  product: Product
  id: string
  quantity: number = 1

  constructor(private route: ActivatedRoute, private httpService: HttpService, private cart: CartService) { }

  ngOnInit (): void {
    this.route.paramMap.subscribe(params => { 
      this.id = params.get('id') || ''
  });
    this.httpService.getProducts().subscribe(data => {
      this.products = data
      this.products.filter((item, index) => { 
        if(+item.id === +this.id){
          this.product = this.products[index]
          console.log(this.product)
        }
      })
    })
  }

  addToCart(){
    this.product.quantity = this.quantity
    this.cart.addToCart(this.product)
    window.alert(`${this.product.name} x ${this.product.quantity} have been added to your cart`)
    //this.addProductToCart.emit(this.product)
  }
  
}
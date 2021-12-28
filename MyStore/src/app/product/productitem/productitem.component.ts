import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import Product from 'models/product';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {
  @Input() product: Product
  @Output() addProduct: EventEmitter<Product> = new EventEmitter
  quantity: number = 1

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(){
    console.log(`this.quantity`)
    console.log(this.quantity)
    this.product.quantity = this.quantity
    console.log(`this.product`)
    console.log(this.product)
    this.addProduct.emit(this.product)
    this.quantity = 1
  }
}

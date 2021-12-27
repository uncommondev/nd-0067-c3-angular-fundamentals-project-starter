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
    this.product.quantity = this.quantity
    this.addProduct.emit(this.product)
  }
}

import { Component, OnInit } from '@angular/core';
import { CartService } from 'services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderDetails = this.cartService.order
  displayPage: boolean = false

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    if (this.orderDetails !== undefined) {
      this.displayPage = true
    }
  }

  clearOrder(){
    this.cartService.clearOrder()
  }

}

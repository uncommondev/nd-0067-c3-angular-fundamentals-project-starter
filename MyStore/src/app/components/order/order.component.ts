import { Component, OnInit } from '@angular/core';
import { CartService } from 'services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderDetails = this.cartService.order

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

  }

  clearOrder(){
    this.cartService.clearOrder()
  }

}

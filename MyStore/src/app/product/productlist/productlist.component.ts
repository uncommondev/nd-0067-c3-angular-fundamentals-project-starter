import { HttpService } from './../../../../services/http.service';
import { Component, OnInit } from '@angular/core';
import Product from 'models/product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products: Product[] = []

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    console.log(`ngOnInit`)
    this.httpService.getProducts().subscribe(data => {
      console.log(data)
      this.products = data
    })
    console.log(`Products`)
    console.log(this.products)
  }

}
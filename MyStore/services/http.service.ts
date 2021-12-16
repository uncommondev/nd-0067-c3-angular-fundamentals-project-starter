import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Product from 'models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  filePath: string = 'assets/data.json'

  constructor(private http: HttpClient) { 
    
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.filePath)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = "https://fakestoreapi.com/products"
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(this.url)
  }

  getById(id: any) {
    return this.http.get(this.url + `/${id}`)
  }

  post(object: any) {
    return this.http.post(this.url, object)
  }

  put(id : any , object : any){
    return this.http.put(this.url + `/${id}` , object)
  }
  delete(id: any) {
    return this.http.delete(this.url + `/${id}`)
  }
}

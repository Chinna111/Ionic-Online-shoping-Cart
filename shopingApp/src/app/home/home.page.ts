import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 
  cart = [];
  items = [];
 
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
 
  constructor(private router: Router, private cartService: CartService) { }
 
  ngOnInit() {
    this.items = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
  }
 
  addToCart(product) {
    this.cartService.addProduct(product);
  }
 
  openCart() {
    this.router.navigate(['cart']);
  }

  
  openHome() {
    this.router.navigate(['tab1']);
  }

  openLaptop(){
    this.router.navigate(['news']);
  }

  openComputer(){
    this.router.navigate(['computer']);
  }
}
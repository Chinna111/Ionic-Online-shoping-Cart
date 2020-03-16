import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-computer',
  templateUrl: './computer.page.html',
  styleUrls: ['./computer.page.scss'],
})
export class ComputerPage implements OnInit {

  cart = [];
  items = [];
 
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
 
  constructor(private router: Router,private route: Router, private cartService: CartService) { }
 
  ngOnInit() {
    this.items = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
  }
  onews() {
    this.route.navigate(['/news']);
  }
 
  addToCart(product) {
    this.cartService.addProduct(product);
  }
 
  openCart() {
    this.router.navigate(['cart']);
  }

  openHome() {
    this.route.navigate(['tab1']);
  }

  openPhone(){
    this.router.navigate(['home']);
  }

  openLaptop(){
    this.route.navigate(['news']);
  }


}

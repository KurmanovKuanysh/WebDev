import { Component , OnInit} from '@angular/core';
import { products } from '../products';

import { Product } from '../products';

import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-product-list',

  templateUrl: './product-list.component.html',

  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit{
  products = [...products];
  selectedCategory: string | null = null;
  category: string ='';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || '';
      this.filterProductsByCategory();
    });
  }

  loadProducts() {
    // Load products based on the selected category or load all products if no category is specified
    if (this.selectedCategory) {
      this.products = products.filter(product => product.category === this.selectedCategory);
    } else {
      this.products = products;
    }
  }

  filterProductsByCategory() {
    // Фильтруйте продукты по текущей категории
    this.products = products.filter(product => product.category === this.category);
  }

  shareTelegram(product: Product) {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(product.link)}`;
    window.open(telegramUrl, '_blank');
  }

  shareWhatsapp(product: Product) {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent('Check out this product!')}%20${encodeURIComponent(product.link)}`;

    window.open(whatsappUrl, '_blank');
  }



  // Метод, который вызывается при нажатии кнопки уведомления
  onNotify() {
    // Выводим всплывающее окно с уведомлением
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
Авторские права Google LLC. Все права защищены.
Использование этого исходного кода регулируется лицензией MIT, которую
можно найти в файле LICENSE по адресу https://angular.io/license
*/

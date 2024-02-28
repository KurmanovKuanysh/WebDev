// Импортируем модуль Component из Angular Core
import { Component , OnInit} from '@angular/core';

// Импортируем массив products из файла products
import { products } from '../products';

// Импортируем интерфейс Product из файла products
import { Product } from '../products';

import {ActivatedRoute} from "@angular/router";


// Определяем метаданные компонента с помощью декоратора @Component
@Component({
  // Селектор, по которому можно использовать компонент в HTML
  selector: 'app-product-list',

  // Путь к файлу с HTML-разметкой компонента
  templateUrl: './product-list.component.html',

  // Путь к файлу с CSS-стилями компонента
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit{
  products = [...products];
  category: string ='';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || '';
      this.filterProductsByCategory();
    });
  }
  filterProductsByCategory() {
    // Фильтруйте продукты по текущей категории
    this.products = products.filter(product => product.category === this.category);
  }

  shareTelegram(product: Product) {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(product.link)}`;
    window.open(telegramUrl, '_blank');
  }

  // Метод для шаринга продукта в WhatsApp
  shareWhatsapp(product: Product) {
    // Формируем URL для шаринга в WhatsApp
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent('Check out this product!')}%20${encodeURIComponent(product.link)}`;
    // Открываем новое окно с сформированным URL


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

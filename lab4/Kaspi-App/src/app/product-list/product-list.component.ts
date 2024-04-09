// Импортируем модуль Component из Angular Core
import { Component } from '@angular/core';

// Импортируем массив products из файла products
import { products } from '../products';

// Импортируем интерфейс Product из файла products
import { Product } from '../products';

// Определяем метаданные компонента с помощью декоратора @Component
@Component({
  // Селектор, по которому можно использовать компонент в HTML
  selector: 'app-product-list',

  // Путь к файлу с HTML-разметкой компонента
  templateUrl: './product-list.component.html',

  // Путь к файлу с CSS-стилями компонента
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  // Массив продуктов, скопированный из импортированного массива products
  products = [...products];

  // Метод для шаринга продукта в Telegram
  shareTelegram(product: Product) {
    // Формируем URL для шаринга в Telegram
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(product.link)}`;
    // Открываем новое окно с сформированным URL
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

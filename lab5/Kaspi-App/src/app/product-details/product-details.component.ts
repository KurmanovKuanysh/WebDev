import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product: Product | undefined;


}

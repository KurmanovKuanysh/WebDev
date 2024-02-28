import { Component, EventEmitter, Output } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  @Output() categorySelected = new EventEmitter<string>();
  categories: string[] = ['furniture', 'milk']; // Fix the property name here

  constructor(private router: Router) {}
  navigateToCategory(category: string) {
    this.categorySelected.emit(category);
  }
}

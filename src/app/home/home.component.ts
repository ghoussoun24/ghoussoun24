import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products = [
    { name: 'LUXE LIPSTICK', price: 35, image: 'assets/p1.png' },
    { name: 'PINK SERUM', price: 48, image: 'assets/p2.png' },
    { name: 'SOFT CREAM', price: 25, image: 'assets/p3.png' },
    { name: 'NATURAL POWDER', price: 55, image: 'assets/p4.png' },
  ];

  categories = [
    { image: 'assets/cat.png', title: 'SKIN CLEANER', description: 'Best skincare treatment.' },
    { image: 'assets/cat1.png', title: 'MAKEUP ESSENTIALS', description: 'High quality makeup tools.' },
    { image: 'assets/cat2.png', title: 'NATURAL BEAUTY', description: 'Beauty inspired by nature.' },
  ];
}
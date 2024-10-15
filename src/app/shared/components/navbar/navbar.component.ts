import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  standalone: true,
  templateUrl: './navbar.component.html', // direkt html'i ts içerisinde yazabiliriz.
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit, OnChanges {
  // değişkenler, ctor, lifecycle methods, custom methods
  count: number = 10;

  constructor() {}
  // component lifecycle methods
  ngOnInit(): void {
    console.log('Merhaba 2');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges çalıştı', changes);
  }
  // component lifecycle methods

  increaseCount() {
    this.count++;
  }

  decreaseCount() {
    this.count--;
  }
}

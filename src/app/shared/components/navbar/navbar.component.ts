import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './navbar.component.html', // direkt html'i ts içerisinde yazabiliriz.
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit, OnChanges {
  // değişkenler, ctor, lifecycle methods, custom methods
  count: number = 10;
  name: string = '';
  surname: string = 'Kalaycı';
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
  // var
  onNameChange(event: any) {
    console.log(event);
    this.name = event.target.value;
  }
  // One Way Data Binding - Two Way D.B

  randomName() {
    this.name = 'Emre';
  }
}

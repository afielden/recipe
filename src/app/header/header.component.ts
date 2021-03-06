import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() showCategory = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(item: string) {
    console.log('show ' + item);
    this.showCategory.emit(item);
  }
}

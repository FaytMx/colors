import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Color } from 'src/app/interfaces/colors';

@Component({
  selector: 'app-card-color',
  templateUrl: './card-color.component.html',
  styleUrls: ['./card-color.component.css'],
})
export class CardColorComponent implements OnInit {
  copy: boolean;

  @Input() item: Color;
  @Input() isCopy: boolean;
  @Output() copied: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  copyColor(color: Color) {
    console.log(color);
    this.copyText(color.color);
    this.copied.emit({ item: this.item, copied: true });
  }

  copyText(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.copy = true;
    setTimeout(() => {
      this.copy = false;
    }, 2000);
  }
}

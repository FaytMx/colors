import { Component, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/colors.service';
import { Colors, Color } from '../../interfaces/colors';


@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  colors: Color[];
  page: number = 1;
  isLoaded: boolean = false;
  totalPages: number;
  isCopy: boolean = false;
  itemColor: Color;

  constructor(private wsColors: ColorsService) { }

  ngOnInit() {
    this.wsColors.getColors(this.page).subscribe((data:Colors) => {
      console.log(data);
      this.colors = data.data;
      this.isLoaded = true;
      this.totalPages = data.total_pages;
      console.log(this.page);
      console.log(data.total_pages)
    })
  }

  onNextPage() {
    this.page=this.page+1;
    this.wsColors.getColors(this.page).subscribe((data:Colors) => {

      this.colors = data.data;
    })
  }

  onPreviewPage() {
    this.page=this.page-1;

    if (this.page ==0) {
      return;
    }
    this.wsColors.getColors(this.page).subscribe((data:Colors) => {
      console.log(data);
      this.colors = data.data;
    })
  }

  onCopy(event){
    console.log(event);
    this.isCopy = event.copied;
    this.itemColor = event.item;
    setTimeout(() => {
      this.isCopy = false;
      this.itemColor = null;
    }, 1000);
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'bgcolor'
})
export class BgcolorPipe implements PipeTransform {

  constructor(private sanitize:DomSanitizer) {

  }


  transform(value: any): any {
    return this.sanitize.bypassSecurityTrustStyle(value);
  }
}

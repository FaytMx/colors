import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ColorsComponent } from './components/colors/colors.component';
import { CardColorComponent } from './components/card-color/card-color.component';
import { BgcolorPipe } from './pipes/bgcolor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ColorsComponent,
    CardColorComponent,
    BgcolorPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

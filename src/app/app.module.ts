import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FileManagerAllModule } from '@syncfusion/ej2-angular-filemanager';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FileManagerAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

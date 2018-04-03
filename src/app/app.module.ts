import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/app/app.component';
import { CategoriesComponent } from './components/category/categories.component';

import { CategoryService } from './services/category.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ CategoryService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

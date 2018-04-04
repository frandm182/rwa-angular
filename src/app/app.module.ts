import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { routes } from './app.route';
import { AppComponent, CategoriesComponent, QuestionsComponent, TagsComponent } from './components';
import { CategoryService, QuestionService, TagService } from './services';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    QuestionsComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    CategoryService,
    QuestionService,
    TagService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

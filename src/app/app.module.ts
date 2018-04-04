import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/app/app.component';
import { CategoriesComponent } from './components/category/categories.component';
import { QuestionsComponent } from './components/question/questions.component';
import { TagsComponent } from './components/tag/tags.component';


import { CategoryService } from './services/category.service';
import { QuestionService } from './services/question.service';
import { TagService } from './services/tag.service';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    QuestionsComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    CategoryService,
    QuestionService,
    TagService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

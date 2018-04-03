import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Category } from '../../model';
import { CategoryService } from '../../services';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'category-list',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {
  categories: Category[];
  sub: any;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.sub = this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}

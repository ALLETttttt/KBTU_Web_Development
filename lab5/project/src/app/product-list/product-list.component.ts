import { Component, Input } from '@angular/core';

import {Product, products} from "../products";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  @Input() categoryName: string | undefined;
  products = [...products];

  remove(id:number){
    this.products = this.products.filter((x) => x.id !== id);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
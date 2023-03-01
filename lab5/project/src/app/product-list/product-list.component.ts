import { Component, Input } from '@angular/core';

import {Product, products} from "../products";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products = products;
  numberOfLikes : number = 0;
  flag : boolean = true;

  like(){
    if(this.flag){
      this.numberOfLikes++;
      this.flag = false;
    }
    else{
      this.numberOfLikes--;
      this.flag = true;
    }
  }

  remove(id:number){
    this.products = this.products.filter((x) => x.id !== id);
  }

  share(name: string, url: string | undefined) {
    window.open(`https://t.me/share/url?url=${url}&text=${name}`)
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
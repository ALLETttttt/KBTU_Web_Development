import { Component, Input, Output, EventEmitter} from '@angular/core';
import {Product, products} from "../products";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product | undefined;
  @Output() remove = new EventEmitter();
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

  Remove(){
    this.remove.emit(this.product?.id);
  }

  share(name: string, url: string | undefined) {
    window.open(`https://t.me/share/url?url=${url}&text=${name}`)
  }
}

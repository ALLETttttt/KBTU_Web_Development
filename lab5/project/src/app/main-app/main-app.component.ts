import { Component } from '@angular/core';
import { Categories } from '../categories';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css']
})
export class MainAppComponent {
  categories = [...Categories]
  show = false;
  categoryName = "";
  categoryClick(name:string){
    if(this.categoryName == name){
      this.show = false;
      this.categoryName = "";
    }
    else{
      this.show = true;
      this.categoryName = name;
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Mortal';

  ordersSelected: number[] = [];
  currentChecked: number = 0;
  checkedLimit: number = 5;
  disableCheckbox: boolean = false;

  onChange() {
    this.currentChecked = this.ordersSelected.length;

    if(this.ordersSelected.length >= this.checkedLimit){
      this.disableCheckbox = true;
    }else{
      this.disableCheckbox=false;
    }
  }
}

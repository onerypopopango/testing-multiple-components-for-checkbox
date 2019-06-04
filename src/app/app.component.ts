import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Mortal';

  //properties related to list components used
  ordersSelected: number[] = [];
  disableCheckbox: boolean = false;
  
  currentChecked: number = 0; //for display purposes
  checkedLimit: number = 5;   //fixed limit
  
  onChange() {
    //this is just to show number of selected orders
    this.currentChecked = this.ordersSelected.length;
    
    //this adds the limit before disabling checkboxes
    if(this.ordersSelected.length >= this.checkedLimit){
      this.disableCheckbox = true;
    }else{
      this.disableCheckbox=false;
    }
  }
}

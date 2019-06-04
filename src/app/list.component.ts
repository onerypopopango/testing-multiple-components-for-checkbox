import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: "list-component",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  //diffrent parameters when called result in different data
  @Input() sort: string = "firstOrders";

  //this is an array containing the selected order ids
  @Input() ordersSelected: number[] = [];

  //this is a switch required for disabling/enabling checkboxes
  @Input() disableCheckbox: boolean = false;

  orders = [];
  firstOrders = [
    { id: 1, displayName: 'Order 1' },
    { id: 2, displayName: 'Order 2' },
    { id: 3, displayName: 'Order 3' },
    { id: 4, displayName: 'Order 4' },
    { id: 5, displayName: 'Order 5' }
  ];
  secondOrders = [
    { id: 6, displayName: 'Order 6' },
    { id: 7, displayName: 'Order 7' },
    { id: 8, displayName: 'Order 8' },
    { id: 9, displayName: 'Order 9' },
    { id: 10, displayName: 'Order 10' }
  ];

  getData() {
    if(this.sort === "secondOrders"){
      this.orders = this.secondOrders;
    }else{
      this.orders = this.firstOrders;
    }
  };

  //generates data on initialization
  ngOnInit() {
    this.getData();
  }

  //adds or removes orders from ordersSelected array
  onChange(event: any) {
    if (event.srcElement.checked) {
      this.ordersSelected.push(event.target.value);
    }else{
      let index = this.ordersSelected.indexOf(event.target.value);
      this.ordersSelected.splice(index, 1);
    }
  }

  //sets the [disabled] status of the html checkboxes
  getDisabledStatus(order):boolean {
    if(this.disableCheckbox == false){
      return false;
    }else{
      if( this.ordersSelected.indexOf(order.id.toString()) != -1 ){
        return false;
      }else {
        return true;
      }
    }
  }
}
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: "list-component",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  @Input() sort: string = "firstOrders";
  @Input() ordersSelected: number[] = [];
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

  ngOnInit() {
    this.getData();
  }

  onChange(event: any) {
    if (event.srcElement.checked) {
      this.ordersSelected.push(event.target.value);
    }else{
      let index = this.ordersSelected.indexOf(event.target.value);
      this.ordersSelected.splice(index, 1);
    }
  }

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
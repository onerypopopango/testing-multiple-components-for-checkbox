import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: "list-component",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  @Input() sort: string = "firstOrders";
  @Input() ordersSelected: number[] = [];
  checkCurrent: number = 0;

  orders = [];
  firstOrders = [
    { id: 1, displayName: 'order 1' },
    { id: 2, displayName: 'order 2' },
    { id: 3, displayName: 'order 3' },
    { id: 4, displayName: 'order 4' },
    { id: 5, displayName: 'order 5' }
  ];
  secondOrders = [
    { id: 6, displayName: 'order 6' },
    { id: 7, displayName: 'order 7' },
    { id: 8, displayName: 'order 8' },
    { id: 9, displayName: 'order 9' },
    { id: 10, displayName: 'order 10' }
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
      this.checkCurrent++;
      this.ordersSelected.push(event.target.value);
    }else{
      this.checkCurrent--;
      let index = this.ordersSelected.indexOf(event.target.value);
      this.ordersSelected.splice(index, 1);
    }
  }


}
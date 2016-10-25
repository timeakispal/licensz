import {Component} from 'angular2/core';

@Component({
    selector: 'my-component',
    template: `
           <table border="1">
            <tr
              *ngFor="#Item of Items"
              (click)="onItemClicked(Item)">
                  <td>{{Item.name}}</td> 
                  <td>{{Item.price}}</td>
              </tr>
           </table>
           <br />
           <label>Edit price:</label><input type="text" [(ngModel)]="clickedItem.price">
   `
})
export class AppBinding {
     public Items = [
                     {name: "Butter", price: 30},
                     {name: "Milk", price: 40},
                     {name: "Yogurt", price: 50},
                     {name: "Cheese", price: 60},
                  ];
     public clickedItem = {price: ""};
     onItemClicked(Item) {
        this.clickedItem = Item;
     }
}
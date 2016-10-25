"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var AppBinding = (function () {
    function AppBinding() {
        this.Items = [
            { name: "Butter", price: 30 },
            { name: "Milk", price: 40 },
            { name: "Yogurt", price: 50 },
            { name: "Cheese", price: 60 },
        ];
        this.clickedItem = { price: "" };
    }
    AppBinding.prototype.onItemClicked = function (Item) {
        this.clickedItem = Item;
    };
    AppBinding = __decorate([
        core_1.Component({
            selector: 'my-component',
            template: "\n           <table border=\"1\">\n            <tr\n              *ngFor=\"#Item of Items\"\n              (click)=\"onItemClicked(Item)\">\n                  <td>{{Item.name}}</td> \n                  <td>{{Item.price}}</td>\n              </tr>\n           </table>\n           <br />\n           <label>Edit price:</label><input type=\"text\" [(ngModel)]=\"clickedItem.price\">\n   "
        }), 
        __metadata('design:paramtypes', [])
    ], AppBinding);
    return AppBinding;
}());
exports.AppBinding = AppBinding;
//# sourceMappingURL=data_binding_app.component.js.map
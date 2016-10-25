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
var contact_1 = require('./contact');
var ContactComponent = (function () {
    function ContactComponent() {
        this.countries = ['India', 'Australia', 'England', 'South Africa', 'USA', 'Japan', 'Singapore'];
        this.contact = new contact_1.Contact('Ravi', 'Shankar', this.countries[0], 6445874544);
        this.submitted = false;
        this.active = true;
    }
    ContactComponent.prototype.onSubmit = function () { this.submitted = true; };
    ContactComponent.prototype.newContact = function () {
        var _this = this;
        this.contact = new contact_1.Contact('', '');
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'contact-form',
            styleUrls: ['./style.css'],
            templateUrl: 'app/contact-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact-form.component.js.map
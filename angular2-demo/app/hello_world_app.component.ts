import {Component, View} from "angular2/core";

@Component({
   selector: 'hello-world'
})

@View({
  template: '<h2>Hello {{nev}} !!</h2>'
})

export class MyHelloWorldClass {
	nev: 'Timi'
}
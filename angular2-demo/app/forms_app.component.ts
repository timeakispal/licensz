import {Component} from 'angular2/core';
import {ContactComponent} from './contact-form.component';

@Component({
  selector: 'my-form',
  template: `<contact-form></contact-form>`,
  directives: [ContactComponent]
})

export class AppComponent { }
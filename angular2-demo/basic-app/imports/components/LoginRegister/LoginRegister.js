import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { userDetails } from '../../api/userDetails.js';

import template from './LoginRegister.html';

Router.route('/', {
	name: 'home',
    template: 'home'
});

class LoginRegisterCtrl {
	constructor($scope) {
		$scope.viewModel(this);

    	this.subscribe('userDetails');
    	this.helpers({
    		currentUser() {
        	return Meteor.user();
	      }
	    })
	}

	register(email, firstname, lastname, password) {
    // Insert a task into the collection
    
		if (this.email && this.password) {
			Meteor.call('user.register', email, firstname, lastname, password);
			Router.go("home"); // Redirect user if registration succeeds
		}
	}
}

export default angular.module('LoginRegister', [
  angularMeteor
])

.component('LoginRegister', {
	templateUrl: '/imports/components/LoginRegister/LoginRegister.html',
	controller: ['$scope', LoginRegisterCtrl]
});
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '/imports/startup/both/Accounts';
import '/imports/startup/both/Routes';
import '/imports/ui/stylesheets/w3.css'
import '/imports/ui/stylesheets/style.css'

Template.myNav.events({
	'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('home');
    },

    'click .hide-elements' : function(event){
    	var x = document.getElementById("navDemo");
	    if (x.className.indexOf("w3-show") == -1) {
	        x.className += " w3-show";
	    } else {
	        x.className = x.className.replace(" w3-show", "");
	    }
    },

    'click .hide-home' : function(event){
    	var x = document.getElementById("navDemo");
	    if (x.className.indexOf("w3-show") != -1) {
	        x.className = x.className.replace(" w3-show", "");
	    }
    },
});

Template.myNav.helpers({
  firstName: function() {
    return Meteor.user().username;
  }
});

Template.home.events({
	'click .get-started' : function(event){
		event.preventDefault();
		if (Meteor.userId()) {
			Router.go('home');
		} else {
			Router.go('user');
		}
	}
});

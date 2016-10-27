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

});

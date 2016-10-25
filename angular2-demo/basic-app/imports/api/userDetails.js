import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const userDetails = new Mongo.Collection('userDetails');

if (Meteor.isServer) {
  // This code only runs on the server
}

Meteor.methods({
  'user.register' (email, firstname, lastname, password) {
    
    // Make sure the user is not logged in before registering a new account
    if (Meteor.userId()) {
      throw new Meteor.Error('already-logged-in');
    }

    check(firstname, String);
    check(lastname, String);
 
    Accounts.createUser({
	    email: email,
	    password: password
	}, function(error){
	    if(error){
	        console.log(error.reason); // Output error if registration fails
	    } else {
	        userDetails.insert({
	            email: email,
	            firstname: firstname,
	            lastname: lastname
	        });
	        userDetails.find();
	        Router.go("home"); // Redirect user if registration succeeds
	    }
	});
  },
});
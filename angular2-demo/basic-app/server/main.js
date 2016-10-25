import { Meteor } from 'meteor/meteor';
export const userDetails = new Mongo.Collection('userDetails');

Meteor.startup(() => {
  // code to run on server at startup
});

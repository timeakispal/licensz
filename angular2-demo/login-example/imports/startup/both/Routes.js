import '/imports/ui/templates/base.html';

Router.configure({
    layoutTemplate: 'myLayout',
    yieldTemplates: {
        myNav: {to: 'nav'},
        myFooter: {to: 'footer'},
    }
});

Router.route('/', {
	name: 'home',
    template: 'home'
});

Router.route('/user', {
	name: 'user',
    template: 'user'
});

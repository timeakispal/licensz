import '/imports/ui/templates/base.html';
import '/imports/ui/templates/navigation.html';
import '/imports/ui/templates/footer.html';
import '/imports/ui/templates/home.html';
import '/imports/ui/templates/user.html';

Router.configure({
    layoutTemplate: 'myLayout',
    yieldTemplates: {
        myNav: {to: 'nav'},
        myFooter: {to: 'footer'},
    }
});

Router.route('/', {
	name: 'home',
    template: 'home',
});

Router.route('/user', {
	name: 'user',
    template: 'user'
});

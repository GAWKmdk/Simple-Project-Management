AppController = RouteController.extend({
  layoutTemplate: 'appLayout'
});

AppController.events({
  'click [data-action=logout]' : function() {
    AccountsTemplates.logout();
    Bert.alert( 'Logged in Successfully', 'success', 'growl-bottom-right', 'fa-check' );
  }
});

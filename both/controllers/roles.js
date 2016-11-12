RoleController = AppController.extend({
  waitOn: function() {
    return Meteor.subscribe('users');
  },
  data: {
    
  },
  onAfterAction: function () {
    Meta.setTitle('TeamRoles');
  }
});

RoleController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});

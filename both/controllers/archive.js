ArchiveController = AppController.extend({
  waitOn: function() {
   Meteor.subscribe('archives', Session.get('active_project'));
      
  },
  data: {
      
      
    
  },
  onAfterAction: function () {
    Meta.setTitle('Archive');
  }
});

ArchiveController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
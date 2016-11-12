ListingController = AppController.extend({
  waitOn: function() {
    return [Meteor.subscribe('customers'),Meteor.subscribe('contacts')];
  },
  data: {
    
      customers: function() {
          return Customers.find();
      },
      contacts: function() {
          return Contacts.find();
      }
  },
    
  onAfterAction: function () {
    Meta.setTitle('Clients');
  }
});

ListingController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});

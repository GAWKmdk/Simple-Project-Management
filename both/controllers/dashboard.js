DashboardController = AppController.extend({
  waitOn: function() {
    //return this.subscribe('projects');
      return [ Meteor.subscribe('projects'),Meteor.subscribe('chats'), Meteor.subscribe('customers'), Meteor.subscribe('converse'), Meteor.subscribe('conversations', this.params.id), Meteor.subscribe('todos', this.params.id), Meteor.subscribe('calevents', this.params.id),Meteor.subscribe('tasks',this.params.id),
        Meteor.subscribe('boards',this.params.id),
        Meteor.subscribe('lists',this.params.id),
Meteor.subscribe('uploads', this.params.id), 
              Meteor.subscribe('users') ];
      
  },
    
  data: {
     
    projects: function() {
      return Projects.find();
      
  },
  users: function() {
          return Meteor.users.find(); 
      },
      
      'customers':function(){
        return Customers.find();
      }
 
  },
    
    
    
  onAfterAction: function () {
    Meta.setTitle('Dashboard');
       $(document).scrollTop(0);
    
  }
});

DashboardController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();

  }
});


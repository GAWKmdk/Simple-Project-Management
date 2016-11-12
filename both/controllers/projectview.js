ProjectViewController = AppController.extend({
  
    waitOn: function() {
       
    Meteor.subscribe('customers');
        Meteor.subscribe('conversations',this.params.id);
          Meteor.subscribe('converse',this.params.id);
     // Meteor.subscribe('todos',this.params.id);
      Meteor.subscribe('calevents',this.params.id);
      Meteor.subscribe('uploads',this.params.id);
       
      Meteor.subscribe('users');
     Meteor.subscribe('chats');
        
        Meteor.subscribe('tasks',this.params.id);
        Meteor.subscribe('boards',this.params.id);
        Meteor.subscribe('lists',this.params.id);
        
     
      return Meteor.subscribe('projects');
      
  },
  data: function(){
       Session.set('active_project',this.params.id);
          return Projects.findOne({_id:this.params.id});
    
   
  },
  users: function() {
          return Meteor.users.find({}, {fields:{createdAt: true, profile: true, emails: true, username: true}}); 
      },
      'customers':function(){
        return Customers.find();
      },
    
    
  onAfterAction: function () {
  
        $(document).scrollTop(0);
     
           
        
      
        if (this.ready()) {
    //  Meta.setTitle('Project |' + this.data().name);
             Meta.setTitle('Project |' + this.params.id);
  }
     
  }
});

ProjectViewController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});

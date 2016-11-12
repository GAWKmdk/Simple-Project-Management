Meteor.publishComposite("items", function() {
  return {
    find: function() {
      return Items.find({}, {
          sort: {rating: -1, createdAt: -1}
          
      });
    }
      
  }
});


//basic for kanban/trello/todo
Meteor.publish('todos',function(project){
    return Calevents.find({project:project});
});

//used for general chat -- to upgrade to a slack form with channels
Meteor.publish('chats',function(project){
    return Chats.find({project:project});
});


//used for users and their usernames
Meteor.publish("users", function() {
    return Meteor.users.find({}, {fields:{createdAt: true, profile: true, emails: true, username: true}});
});

//used for general projects
Meteor.publish('projects',function(){
    return Projects.find({});
});


//filter-collections
//FilterCollections.publish(Projects);

//used for customers
Meteor.publish('customers',function(){
    return Customers.find({});
    //original return Customers.find();
});

//filter-collections
//FilterCollections.publish(Customers);


//used for calendar events
Meteor.publish('calevents',function(project){
    return Calevents.find({project:project});
});

//used for team communication board
Meteor.publish('conversations',function(project){
    return Conversations.find({project:project});
});

//used for files upload documentation board
Meteor.publish('converse',function(project){
    return Conversate.find({project:project});
});

//basic for files upload colletion
Meteor.publish('uploads',function(project){
    return Uploads.find({project:project});
});

//basic for roles
Meteor.publish(null,function(){
  return Meteor.roles.find({});
})


Meteor.publish('archives', function(project){
  return [
  Conversations.find({project:project,archived:true}),
   Conversate.find({project:project,archived:true}),
   Uploads.find({project:project,archived:true}),
   Projects.find({project:project,archived:true}),
   Customers.find({archived:true})   
      
      // Todos.find({project:project,archived:true}),
   //    Gantts.find({project:project,archived:true}),
   //    Snippets.find({project:project,archived:true}),
     //  Sketchings.find({project:project,archived:true})
  ];
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//for kanban
Meteor.publish('tasks',function(project){
    return Tasks.find({});
});

//for kanban
Meteor.publish('lists',function(project){
    return Lists.find({});
});

//for kanban
Meteor.publish('boards',function(project){
    return Boards.find({});
});




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//used for File board
Meteor.publish('notifications',function(project){
    return Notices.find({project:project});
});


//no currently used but can be upgraded
Meteor.publish('contacts',function(){
    return Contacts.find({});
});


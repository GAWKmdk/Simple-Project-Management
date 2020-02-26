Meteor.startup(function() {

// note for debugging :: archived could be true/false or just archived:archived

 Meteor.methods({
   
      //server project save
      'saveProject': function(project) {
          check(project.name,String);
          project.userId = Meteor.userId();
          project.dateentered = new Date();
          project.lastupdate = new Date();
          project.archived = false;
          project.notes = 'Provide your brief here.';
          project.customer = 'Group Associates Incorporated';
          project.author = Meteor.user().username;
          project.authorcompany = Meteor.user().profile.company;
          project.authorphone = Meteor.user().profile.phone; 
          project.authoremail = Meteor.user().emails[0].address;
          project.authorrole = Meteor.user().profile.position;
          
          if(Customers.find().count() < 1){
              
               var datecreate = new Date();
               var username = Meteor.user().username;
              var lastupdate =  new Date();
              
              return Customers.insert({name:'Group Associates Incorporated', country: 'Global', role: 'Founder', company: 'StartupEngine',website:'https://google.com',email:'support@gmail.com',phone:'+1-900-0000-9999', contact: 'No additional notes or comments', datecreate: datecreate, username: username, lastupdate: lastupdate });
}
          
         
          if (!project.datedue) {
              project.datedue = new Date();
          }
          //customer or contacts collection mk
          if (!project.customer){
              project.customer = Customers.findOne({})._id;
          }
          project.invited = [];
          
          return Projects.insert(project);
          
      },
     'removeProject':function(id){
         return Projects.remove({_id:id});
     },
     'updateProjectName': function (id, name) {
    var lastupdate =  new Date();
      return Projects.update({_id: id}, {
          
          $set: {
              name: name,lastupdate:lastupdate
          }
      });
    },
    'updateProjectCustomer': function (project, id) {
        var lastupdate =  new Date();
      return Projects.update({_id: project}, {
        $set: {
          customer: id,lastupdate:lastupdate
        }
      });
    },
    'updateProjectDate': function (project, date) {
         var lastupdate =  new Date();
      return Projects.update({_id: project}, {
        $set: {
          datedue: date,lastupdate:lastupdate
        }
         //autoupdate duedate 
         
           
          // Run 'addCalEvent':function (calevent) {
        // if(!calevent.type) {
            //  calevent.type = 'duedate';
             //  calevent.title =  date;
        // }
         //  return Calevents.insert(calevent);
     //},
           
          
      });
    },'updateProjectNotes': function (id, notes) {
         var lastupdate =  new Date();
      return Projects.update({_id: id}, {
        $set: {
          notes: notes,lastupdate:lastupdate
        }
      });
    },
    'addCustomer': function (name) {
        //check(name.name,String);
        var country = 'No country provided';
        var role = 'No position/role provided';
        var company = 'No company provided';
        var website = 'No website provided';
        var email = 'No email provided';
        var phone = 'No contact provided';
        var contact = 'No additional notes/comments provided';
        var datecreate = new Date();
        var username = Meteor.user().username;
        var lastupdate =  new Date();
        var archived = false; 
          
      return Customers.insert({name: name,country: country,role: role,company: company,website: website,email: email,phone: phone,contact: contact, lastupdate: new Date(), datecreate: new Date(),username:username });
    },
    'updateCustomerName': function (id, name) {
      return Customers.update({_id: id}, {$set: {name: name}});
    },
    'updateCustomerCountry': function (id, country) {
      return Customers.update({_id: id}, {$set: {country: country}});
    },
    'updateCustomerTitle': function (id, role) {
      return Customers.update({_id: id}, {$set: {role: role}});
    },
    'updateCustomerName': function (id, name) {
      return Customers.update({_id: id}, {$set: {name: name}});
    },
    'updateCustomerPhone': function (id, phone) {
        
      return Customers.update({_id: id}, {$set: {phone: phone}});
    },
    'updateCustomerContact': function (id, contact) {
      return Customers.update({_id: id}, {$set: {contact: contact}});
    },
    'updateCustomerCompany': function (id, company) {
      return Customers.update({_id: id}, {$set: {company: company}});
    },
    'updateCustomerEmail': function (id, email) {
      return Customers.update({_id: id}, {$set: {email: email}});
    },
    'updateCustomerWebsite': function (id, website) {
      return Customers.update({_id: id}, {$set: {website: website}});
    },
    'removeCustomer': function (id) {
      return Customers.remove({_id: id});
    },     
     
     'addCalEvent':function (calevent) {
         if(!calevent.type) {
             calevent.type = 'milestone';
         }
         return Calevents.insert(calevent);
     },
    'updateCalEvent':function(calevent){
      return Calevents.update({_id:calevent._id},{
          //update with eventtypes
        $set:{
          title:calevent.title,
          project:calevent.project,
          type:calevent.type,
           information:calevent.information,
            location:calevent.location,
            staff:calevent.staff,
           // color:calevent.color,
           // icon:calevent.icon,
        }
      })
    },
    'updateEventTimes':function(calEvent){
        //currently only updating dates not HH:MM or duration
      return Calevents.update({_id:calEvent._id},{
        $set:{
          title:calEvent.title,           
          start:calEvent.start,
          end:calEvent.end
        }
      })
    },
     
     ////// SCRUMBOARD
    // {
     
     // Add project scrum - collection
                        // id 
                          // type - update type 
     
 //},
    
     'removeCalEvent':function(id){
      return Calevents.remove({_id:id});
     
    },
         'archiveFile':function(id,archived){
        Uploads.update({_id:id},{$set:{archived:true}});
         },
     
     'addDocumentation':function(filechat){
      return Conversate.insert(filechat);
    },     
     'archiveFileConversation':function(id,archived){
          Conversate.update({_id:id},{$set:{archived:archived}});
     },
      'addConversation':function(teamchat){
      return Conversations.insert(teamchat);
    },     
     'archiveConversation': function(id,archived){
          Conversations.update({_id:id},{$set:{archived:archived}});
     },
     
      'archiveCustomer': function(id,archived){
          Customers.update({_id:id},{$set:{archived:archived}});
     },
     
    'archiveProject':function(id,archived){
      Projects.update({_id:id},{$set:{archived:archived}});
    },
     'archiveTodo':function(id,archived){
         Todos.update({_id:id}, {$set:{archived:archived}});
     },
     'completeTodo':function(id,complete){
         Todos.update({_id:id}, {$set:{completed:complete}});
     },
      'flaggedTodo':function(id,flagged){
         Todos.update({_id:id}, {$set:{flagged:flagged}});
     },
     // 'sprintTodo':function(id,sprint){
     //{if after date then bert:package notification}
       //  Todos.update({_id:id}, {$set:{sprint:sprint}});
    // },
     'addTodo':function(todo){
         todo.userId = Meteor.userId();
         todo.dateadded = new Date();
         //edit and calendar datepicker
         todo.datedue = new Date();
         todo.archive = false;
         
         //green check with grey line through
         todo.completed = false;
         // red with flag and underline
         todo.flagged = false;
         //green with stopwatch
         todo.sprint = false;
         return Todos.insert(todo);
     },
     'inviteUser':function(projectid,userId){
         var project = Projects.findOne({_id:projectid});
         if(!project || project.userId !==this.userId){
             throw new Meteor.Error(404, "No such person exists or No such project is avaliable !");
         }
         if(userId !== project.userId && !_.contains(project.invited, userId)){
             Projects.update(projectid, {$addToSet:{invited:userId}});
         }
     },
     'removeInvite': function(projectid, userId){
         var project = Projects.findOne({_id:projectid});
         if(!project || project.userId !== this.userId){
             throw new Meteor.Error(404, "No such project is avaliable !");
         }
         Projects.update(projectid, {$pull:{invited:userId}});
     },
    addChat: function (chat) {
      return Chats.insert(chat);
    },
    removeChats: function () {
      return Chats.remove({});
    },
    // removeselfChat: function () {
    //  return Chats.remove({_id:id});
   // },
addToRole:function(user,role){
      var loggedInUser = Meteor.user();
      if (!loggedInUser && !Roles.userIsInRole(loggedInUser, ['admin'])) {
            throw new Meteor.Error(403, "Access denied")
          }
        Roles.addUsersToRoles(user,role);
    },
    removeFromRole:function(user,role){
        Roles.removeUsersFromRoles(user,role);
    },
     
     addTask: function addTask(text, order, listId) {
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Tasks.insert({
      text: text,
      date: new Date(),
      listId: listId,
      userId: Meteor.userId(),
      username: Meteor.user().username,
      order: order,
    });
  },

  addBoard: function addBoard(title) {
    Boards.insert({
      title: title,
      userId: Meteor.userId(),
      username: Meteor.user().username,
    });
  },

  deleteTask: function deleteTask(taskId) {
    Tasks.remove(taskId);
  },

  setChecked: function setChecked(taskId, isChecked) {
    Tasks.update(taskId, {$set: {checked: isChecked}});
  },

  updateOrder: function updateOrder(taskId, newOrder, listId) {
    Tasks.update(taskId, {$set: {order: newOrder, listId: listId}});
  },

  newList: function newList(title, boardId) {
    Lists.insert({
      title: title,
      boardId: boardId,
      userId: Meteor.userId(),
      username: Meteor.user().username,
    });
  },

  deleteList: function deleteList(listId) {
    Lists.remove(listId);
  },     
  
  updateUser: function updateUser() {
    Meteor.users.update(Meteor.userId(), {$set: {pants: 'Gimli'}});
  },
     
     
  });
});

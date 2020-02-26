//known issue with refreshing contact and invited (session/call)
// if archive project documentation/files/converation not visible 
// archive files not removed from visability since not registering false 
// archive customers not hidden since nothing to check on call ? 
//if call another unarchive get method 'archiveConversate not found -- link to this.
// figure out how to get parent.name of id to display instead of garble encryption 


Template.archives.helpers({
 
    conversations: function () {
    return Conversations.find({},{sort: {dateadded:1},limit:20});
  },
    
    converse: function () {
    return Conversate.find({},{sort: {dateadded:1},limit:20});
  },
    
    uploads:function(){
    return Uploads.find({},{sort: {dateadded:1},limit:20});
       
  }
     
  //todos:function(){
  //  return Todos.find({},{sort: {dateadded:1},limit:20});
  //}, 
    
});


Template.archiveConversation.helpers({
    
    conversations: function () {
    return Conversations.find({},{sort: {dateadded:1},limit:20});
  } 
    
});

Template.archiveConversate.helpers({
    
     converse: function () {
    return Conversate.find({},{sort: {dateadded:1},limit:20});
  }
    
});


Template.archiveFiles.helpers({
    
     uploads:function(){
    return Uploads.find({},{sort: {dateadded:1},limit:20});
       
  }
    
});



Template.archiveCustomer.helpers({
    
     customers:function(){
    return Customers.find({},{sort: {dateadded:1},limit:20});
       
  }
    
});


Template.archives.events({
 
  'click .unarchiveConversation':function(evt,tmpl){   
          var confirmation = confirm('are you sure you want to unarchive this conversation ?');
         if(confirmation === true){
             Meteor.call('archiveConversation',this._id,!this.archived);
         }
  },
    
    'click .unarchiveConversate':function(evt,tmpl){   
          var confirmation = confirm('are you sure you want to unarchive this documentation ?');
         if(confirmation === true){
             Meteor.call('archiveConversate',this._id,!this.archived);
         }
  },
   'click .unarchiveFile':function(evt,tmpl){   
          var confirmation = confirm('are you sure you want to unarchive this file ?');
         if(confirmation === true){
            Meteor.call('archiveFile',this._id,!this.archived);
         }
             },
            
      
 // 'click .unarchiveTodo':function(evt,tmpl){
 //   console.log(this.archived);
 //   Meteor.call('archiveTodo',this._id,!this.archived);
 // }
    
});
Template.archives.rendered= function(){

};

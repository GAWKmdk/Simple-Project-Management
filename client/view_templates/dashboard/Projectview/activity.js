//{sort:{variable:-1}, limit}


Session.setDefault('activitySort',1)

Template.conversations.helpers({
    
    calevents: function(){
        var sortorder = Session.get('activitySort');
     return Calevents.find({project:Session.get('active_project')},
                          {reactive:true, sort:{start:sortorder}/*,limit:Session.get('activityLimit') || 25*/})   
    },
   
   
    activitySort: function(){
        var sortorder = Session.get('activitySort');
        if(sortorder === 1){
            return 'ASC';
        
        } else {
            return 'DESC';
            
        }
    },
    activityLimit: function() {
        var activityLimit = Session.get('activityLimit');
        
    }
})

Template.uploadconversation.helpers({
    
   
    uploads: function(){
        var sortorder = Session.get('activitySortf');
     return Uploads.find({project:Session.get('active_project')},
                          {reactive:true, sort:{start:sortorder}/*,limit:Session.get('activityLimit') || 25*/})   
    },
   
   
    activitySortf: function(){
        var sortorder = Session.get('activitySortf');
        if(sortorder === 1){
            return 'ASC';
        
        } else {
            return 'DESC';
            
        }
    }
})

Template.conversations.events({
  "click .activitySort": function(event, template){
     if(Session.get('activitySort') === 1){
       Session.set('activitySort',-1);
     } else{
       Session.set('activitySort',1);
     }
  }
});


Template.uploadconversation.events({
  "click .activitySortf": function(event, template){
     if(Session.get('activitySortf') === 1){
       Session.set('activitySortf',-1);
     } else{
       Session.set('activitySortf',1);
     }
  }
});


Template.team_member_comment.helpers({
    conversations: function(){
        return Conversations.find(
        {
            archived:{$ne:true}},
            {sort:{dateadded:-1} /*, limit:Session.get('convLimit') || 6 */}
        )
    }
    
})


Template.uploads.events({
    'change .myFileInput': function (event, tmpl){
        FS.Utility.eachFile(event,function(file){
            var theFile = new FS.File(file);
            theFile.creatorId = Meteor.user().username;
            theFile.dateadded = new Date();
            theFile.archived = false;
            theFile.project = Session.get('active_project');
            

   //  
          
            Uploads.insert(theFile,function(err,fileObj){
               Bert.alert( 'Reloading page ... for upload performance queuing', 'info', 'growl-top-right', ' fa-line-chart' );
                if (!err) {
                    
                    // This is a cheap hack since Exception in queued task: withoutInvocation error between Minimongo and cfs.collection are not playing nice Meteor 1.3+
                   
                     var myVar = setInterval(myTimer, 1000);
                     function myTimer() {
             document.location.reload(true);
                        // Session.get('active_project',null);
                     }
                     console.log("inserted without error");
                    
                }else {
          console.log("there was an error", err);
        }
            })
            
         
        })
    },
     'click .archiveFile':function(evt,tmpl){
         
          var confirmation = confirm('are you sure you want to archive this file?');
         if(confirmation === true){
             console.log("file_archived");
    Meteor.call('archiveFile',this._id,true);
        
        console.log(this.archived);
    
         }
  },
    'click #deleteFile': function(event){
        event.preventDefault(); 
        //change to modal with forward
         var confirmation = confirm('are you sure you want to delete this file?');
         if(confirmation === true){
    Uploads.remove({_id:this._id});
}}
    
})

Template.team_member_comment.events({
    'click .addConversation':function(evt,tmpl){
    Session.set('adding_conversation',true);
  },
    'click #deleteConversation':function(evt,tmpl){
     var confirmation = confirm('are you sure you want to delete this message?');
         if(confirmation === true){
    Conversations.remove({_id:this._id});
}},
    'click .archiveConversation':function(evt,tmpl){
           var confirmation = confirm('are you sure you want to archive this file?');
         if(confirmation === true){
              console.log("conversation_archived");
    Meteor.call('archiveConversation',this._id,true);
              
         }
  }, 
    
})


Template.uploads_section.events({
     'click .addDocumentation':function(evt,tmpl){
    Session.set('adding_details',true);
  },
    'click #deleteConversation':function(evt,tmpl){
     var confirmation = confirm('are you sure you want to delete this message?');
         if(confirmation === true){
    Conversate.remove({_id:this._id});
}},
     'click .archiveFileConversation':function(evt,tmpl){
           var confirmation = confirm('are you sure you want to archive this file?');
         if(confirmation === true){
              console.log("conversation_file_archived");
    Meteor.call('archiveFileConversation',this._id,true);
              
         }
  },
   
})


Template.uploads_section.helpers({
    
     converse: function(){
        return Conversate.find({archived:{$ne:true}},{sort:{dateadded:-1}}
        )
    }, 
  
     
   
    
})

 ///////////////
Template.uploads.helpers({
   uploads: function(){
      return Uploads.find({project:Session.get('active_project'),archived:{$ne:true}});
 },
  
})



Template.projectView.helpers({
  
    adding_conversation: function() {
        return Session.get('adding_conversation');
    },
    adding_details: function() {
        return Session.get('adding_details');
    },
    
    ///might require for additional archives
    
})



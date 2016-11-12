Template.invited.helpers({

'userList': function() {

return Meteor.users.find();
},
'invited': function() {

var project = Projects.findOne({_id:Session.get('active_project')});
return Meteor.users.find({_id:{$in:project.invited}});
},
'isowner':function(parent){
return parent.userId === Meteor.userId();
}

});

Template.team_members.helpers({

'userList': function() {

return Meteor.users.find();
},
'invited': function() {

var project = Projects.findOne({_id:Session.get('active_project')});
return Meteor.users.find({_id:{$in:project.invited}});
},
'isowner':function(parent){
return parent.userId === Meteor.userId();
}

});

Template.invited.events({

'click .inviteUser': function(evt,tmpl) {
    //Get default to work so page doesn't refresh at top.
 //evt.preventDefault();
   
var user = tmpl.find('#userToInvite').value;
var project = Session.get('active_project');
Meteor.call('inviteUser', project,user);

},
'click .removeUser':function(evt,tmpl){

    
var user = this._id;
var project = Session.get('active_project');
  //  evt.preventDefault();
Meteor.call('removeInvite', project,user);

}
})


////

Template.fileDlg.helpers({

'uploads': function() {

return Uploads.find();
},
'invited': function() {

var project = Projects.findOne({_id:Session.get('active_project')});
return Meteor.Uploads.find({_id:{$in:project.invited}});
},
'isowner':function(parent){
return parent.userId === Meteor.userId();
}

});

Template.fileDlg.events({

'click .inviteFile': function(evt, tmpl) {

var file = tmpl.find('#fileToInvite').val();
var project = Session.get('active_project');
Meteor.call('inviteFile', project,file);
},
'click .removeFile':function(evt,tmpl){
var file = this._id;
var project = Session.get('active_project');
Meteor.call('removeFile', project,file);
}
})
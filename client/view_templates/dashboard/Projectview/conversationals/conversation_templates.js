Template.conversationDlg.events({

"click .saveconversation": function (event, template) {

var text = template.find('#conversationtext').value;
var conversation = {};
conversation.username = Meteor.user().username;
conversation.note = text;
conversation.dateadded = new Date();
conversation.project = Session.get('active_project');
conversation.owner = Meteor.userId();
Meteor.call('addConversation',conversation);
Session.set('adding_conversation', false);

},
   
  
     "click .closeconversation": function (event, template) {
         Session.set('adding_conversation', false);
     },

})

Template.fileDlg.events({

"click .saveconversation2": function (event, template) {

var textfile = template.find('#conversationtextfile').value;
    var fileselect = template.find('#fileToInvite').value;
    
var details = {};
details.username = Meteor.user().username;
details.note = textfile;
    details.name = fileselect;
details.dateadded = new Date();
details.project = Session.get('active_project');
details.owner = Meteor.userId();
Meteor.call('addDocumentation',details);
Session.set('adding_details', false);


},
   
    
    "click .closeconversation": function (event, template) {
        Session.set('adding_details', false);
    },

})
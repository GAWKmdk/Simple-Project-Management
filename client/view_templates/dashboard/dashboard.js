Template.dashboard.rendered = function() {

};


Template.dashboard.helpers({
   
     ProjectIndex: () => projectIndex
    
});

Template.dashboard.events({
  'change .sorting': (e) => {
    projectIndex
      .getComponentMethods()
     .addProps('sortBy', $(e.target).val())
    ;
  }
});

Template.dashboard.events({
 
'keyup input[type=text]': function (event, tmpl) {
    
if(event.which === 27 || event.which === 13 ){
    event.preventDefault();
    var project = {};
    project.name = tmpl.find('#projectNameEnter').value;
    
    if ( project.name ==='' || project.name === undefined){
    
        console.log("no name given -- prevent this");
        
    } else {
    
    Meteor.call('saveProject', project );
    var eler =  tmpl.find('#projectNameEnter');
      eler.value = '';
      eler.focus();
    }
}

    },    
    
    
    'click .deleteConfirmation': function(evt,tmpl){
    
        evt.preventDefault();
        evt.stopPropagation();
        Session.set('projectToDelete',this._id);
    },
    
    'click .archiveProject':function(event, template){
   return Meteor.call('archiveProject',this._id,!this.archived);
        evt.preventDefault();
        evt.stopPropagation();
      Session.set('archiveProject',this._id, true);   
    
        return Meteor.call('archiveProject',this._id,!this.archived); 
         console.log("project archived -- for testing purposes");
  },
  'click .cancelDelete':function(){
    return Session.set('projectToDelete',null);
  }
    
    
});

Template.dashboard.helpers({
  
    projectToDelete:function() {
        return Session.get('projectToDelete');
    },
    //archiveProject:function() {
    //    return Session.get('archiveProject');
   // }
  })


Template.dashboard.helpers({
  
    projectCount:function() {
        return Projects.find().count()
    }
  })

Template.project.helpers({
  customer: function (customer) {
    var cust = Customers.findOne({_id: this.customer});
    return cust;
  }
    
})






Template.delconfirm.events({
    
    'click .deleteConfirmed':function(evt,tmpl){
        Meteor.call('removeProject', Session.get('projectToDelete'));
        Session.set('projectToDelete', null);
    },
    
    'click .close': function(evt,tmpl){
         Session.set('projectToDelete', null);
    },
    'click #close': function(evt,tmpl){
         Session.set('projectToDelete', null);
    },
    
})



//Template.archiveapprove.events({
    //'click .archiveApproved':function(evt,tmpl){
             // Meteor.call('archiveProject',Session.get('archiveProject'));
   //     Meteor.call('archiveProject',this._id,true);
   //       Session.set('archiveProject', null);
   // },
    
  //  'click .close2': function(evt,tmpl){
  //       Session.set('archiveProject', null);
  //  },
  //  'click #close2': function(evt,tmpl){
  //       Session.set('archiveProject', null);
  //  }
 
//})




  
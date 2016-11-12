Template.listings.helpers({
  customers: function () {
    return Customers.find();
  }
});


Template.listings.helpers({
  
    clientCount:function() {
        return Customers.find().count()
    }
  })


Template.listings.events({
  'keyup .customername': function(event,tmpl) {
    if (event.which === 27 || event.which === 13) {
      event.preventDefault();
      event.target.blur();
        
        var customs_check = tmpl.find('.customername').value;
        
       if ( customs_check ==='' || customs_check === undefined){
    
        console.log("no data given -- prevent this");
        
    } else { 
        
      //Meteor.call('addCustomer',tmpl.find('.customername').value);
        Meteor.call('addCustomer',customs_check);
      var ele =  tmpl.find('.customername');
      ele.value = '';
      ele.focus();
    }
        
    }
  },
    
    'click .deleteApproved': function(evt,tmpl){
    
        evt.preventDefault();
        evt.stopPropagation();
        Session.set('contactToDelete',this._id);
    },
    
     'click .archiveCustomer':function(event, template){
   return Meteor.call('archiveCustomer',this._id,!this.archived);
        // console.log("customer archived -- for testing purposes");
  },
    
  'click .editCustomerName':function(evt,tmpl){
    Session.set('editing_customername',this._id);
    Meteor.setTimeout(function(){
      $('.form-control.name').focus().select();
    },250);

  },
  'click .editCustomerCountry':function(evt,tmpl){
    Session.set('editing_customercountry',this._id);
    Meteor.setTimeout(function(){
      $('.form-control.country').focus().select();
    },250);

  },
  'click .editCustomerTitle':function(evt,tmpl){
    Session.set('editing_customertitle',this._id);
    Meteor.setTimeout(function(){
      $('.form-control.role').focus().select();
    },250);

  },
  'click .editCustomerPhone':function(evt,tmpl){
    Session.set('editing_customerphone',this._id);
    Meteor.setTimeout(function(){
      $('.form-control.phone').focus().select();
    },250);

  },
  'click .editCustomerContact':function(evt,tmpl){
    Session.set('editing_customercontact',this._id);
    Meteor.setTimeout(function(){
      $('.form-control.contact').focus().select();
    },250);

  },
    'click .editCustomerCompany':function(evt,tmpl){
    Session.set('editing_customercompany',this._id);
    Meteor.setTimeout(function(){
      $('.form-control.company').focus().select();
    },250);

  },
    'click .editCustomerEmail':function(evt,tmpl){
    Session.set('editing_customeremail',this._id);
    Meteor.setTimeout(function(){
      $('.form-control.email').focus().select();
    },250);
    },
    
    'click .editCustomerWebsite':function(evt,tmpl){
    Session.set('editing_customerwebsite',this._id);
    Meteor.setTimeout(function(){
      $('.form-control.website').focus().select();
    },250);
    }
});
Template.contact.helpers({
  editingCustomername:function(){
    return Session.equals('editing_customername',this._id);
  },
  editingCustomerphone:function(){
    return Session.equals('editing_customerphone',this._id);
  },
  editingCustomercontact:function(){
    return Session.equals('editing_customercontact',this._id);
  },
    editingCustomercompany:function(){
    return Session.equals('editing_customercompany',this._id);
  },
    editingCustomeremail:function(){
    return Session.equals('editing_customeremail',this._id);
  },
    editingCustomerwebsite:function(){
    return Session.equals('editing_customerwebsite',this._id);
  },
    editingCustomercountry:function(){
    return Session.equals('editing_customercountry',this._id);
  },
    editingCustomertitle:function(){
    return Session.equals('editing_customertitle',this._id);
  }
})


Template.listings.helpers({
  
    contactToDelete:function() {
        return Session.get('contactToDelete');
    }
  });


Template.contact.events({
  //'click .delcustomer': function () {
      
      //  evt.preventDefault();
      //  evt.stopPropagation();
      //  Session.set('contactToDelete',this._id);
   // Meteor.call('removeCustomer', this._id);
 // },
  'blur .name': function(event,tmpl) {
    Session.set('editing_customername',null);
  },
  'blur .phone': function(event,tmpl) {

    Session.set('editing_customerphone',null);
  },
  'blur .contact': function(event,tmpl) {
    Session.set('editing_customercontact',null);
  },
  'blur .company': function(event,tmpl) {
    Session.set('editing_customercompany',null);
  },
  'blur .email': function(event,tmpl) {
    Session.set('editing_customeremail',null);
  },
  'blur .website': function(event,tmpl) {
    Session.set('editing_customerwebsite',null);
  },
  'blur .country': function(event,tmpl) {
    Session.set('editing_customercountry',null);
  },
  'blur .role': function(event,tmpl) {
    Session.set('editing_customertitle',null);
  },
  'keyup .name': function(event,tmpl) {
    if (event.which === 27 || event.which === 13) {
      event.preventDefault();
      var ele =  tmpl.find('.name');
      Meteor.call('updateCustomerName',this._id,ele.value);
      Session.set('editing_customername',null);
    }
  },
  'keyup .email': function(event,tmpl) {
    if (event.which === 27 || event.which === 13) {
      event.preventDefault();
      var ele =  tmpl.find('.email');
      Meteor.call('updateCustomerEmail',this._id,ele.value);
      Session.set('editing_customeremail',null);
    }
  },
  'keyup .company': function(event,tmpl) {
    if (event.which === 27 || event.which === 13) {
      event.preventDefault();
      var ele =  tmpl.find('.company');
      Meteor.call('updateCustomerCompany',this._id,ele.value);
      Session.set('editing_customercompany',null);
    }
  },
  'keyup .website': function(event,tmpl) {
    if (event.which === 27 || event.which === 13) {
      event.preventDefault();
      var ele =  tmpl.find('.website');
      Meteor.call('updateCustomerWebsite',this._id,ele.value);
      Session.set('editing_customerwebsite',null);
    }
  },
  'keyup .phone':function(event,tmpl){
    if (event.which === 27 || event.which === 13) {
      event.preventDefault();
      var ele =  tmpl.find('.phone');
      Meteor.call('updateCustomerPhone',this._id,ele.value.replace('(','').replace(')',''));
      Session.set('editing_customerphone',null);
    }
  },
  'keyup .contact':function(event,tmpl){
    if (event.which === 27 || event.which === 13) {
      event.preventDefault();
      var ele =  tmpl.find('.contact');
      Meteor.call('updateCustomerContact',this._id,ele.value);
      Session.set('editing_customercontact',null);
    }
  },
  'keyup .country':function(event,tmpl){
    if (event.which === 27 || event.which === 13) {
      event.preventDefault();
      var ele =  tmpl.find('.country');
      Meteor.call('updateCustomerCountry',this._id,ele.value);
      Session.set('editing_customercontry',null);
    }
  },
  'keyup .role':function(event,tmpl){
    if (event.which === 27 || event.which === 13) {
      event.preventDefault();
      var ele =  tmpl.find('.role');
      Meteor.call('updateCustomerTitle',this._id,ele.value);
      Session.set('editing_customertitle',null);
    }
  }
});



Template.delapprove.events({
    
    'click .deleteApproved':function(evt,tmpl){
        Meteor.call('removeCustomer', Session.get('contactToDelete'));
        Session.set('contactToDelete', null);
    },
    
    'click .close': function(evt,tmpl){
         Session.set('contactToDelete', null);
    },
    'click #close': function(evt,tmpl){
         Session.set('contactToDelete', null);
    }
})



Template.listings.helpers({
   
     CustomerIndex: () => customerIndex
    
});

Template.listings.events({
  'change .sorting': (e) => {
    customerIndex
      .getComponentMethods()
     .addProps('sortBy', $(e.target).val())
    ;
  }
});

    


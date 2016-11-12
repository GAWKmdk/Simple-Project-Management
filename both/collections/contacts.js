Contacts = new Mongo.Collection('contacts');

//schema
Contacts.allow({
    
    insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return true;
    }
})


Contacts.helpers({

});
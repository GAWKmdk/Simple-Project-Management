Notices = new Mongo.Collection('notifications');

//schema
Notices.allow({
    
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


Notices.helpers({

});
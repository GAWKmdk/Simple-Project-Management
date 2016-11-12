Chats = new Mongo.Collection('chats');

//schema
Chats.allow({
    
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


Chats.helpers({

});
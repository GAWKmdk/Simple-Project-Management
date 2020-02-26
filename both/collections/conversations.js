//for team conversations
Conversations = new Mongo.Collection('conversations');

//schema
Conversations.allow({
    
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


Conversations.helpers({

});

//for proofing/readmes/version statements etc

Conversate = new Mongo.Collection('converse');

//schema
Conversate.allow({
    
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


Conversate.helpers({

});
Tasks = new Mongo.Collection('tasks');

//schema
Tasks.allow({
    
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


Tasks.helpers({

});
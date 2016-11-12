TaskIt = new Mongo.Collection('taskits');

//schema
TaskIt.allow({
    
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


TaskIt.helpers({

});
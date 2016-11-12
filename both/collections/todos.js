Todos = new Mongo.Collection('todos');

//schema
Todos.allow({
    
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


Todos.helpers({

});
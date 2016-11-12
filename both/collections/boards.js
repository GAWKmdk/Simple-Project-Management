Boards = new Mongo.Collection('boards');

//schema
Boards.allow({
    
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


Boards.helpers({

});
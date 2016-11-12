Calevents = new Mongo.Collection('calevents');

//schema
Calevents.allow({
    
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


Calevents.helpers({

});
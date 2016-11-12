Lists = new Mongo.Collection('lists');

//schema
Lists.allow({
    
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


Lists.helpers({

});
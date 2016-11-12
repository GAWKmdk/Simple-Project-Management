Newsletter = new Mongo.Collection('newsletters');

//schema
Newsletter.allow({
    
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


Newsletter.helpers({

});
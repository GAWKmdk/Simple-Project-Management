PostIt = new Mongo.Collection('postits');

//schema
PostIt.allow({
    
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


PostIt.helpers({

});
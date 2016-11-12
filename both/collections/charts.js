Charts = new Mongo.Collection('charts');

//schema
Charts.allow({
    
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


Charts.helpers({

});
Datatables = new Mongo.Collection('datatables');

//schema
Datatables.allow({
    
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


Datatables.helpers({

});
Items = new Mongo.Collection('items');

//schema


Items.helpers({

});

Items.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});

 Meteor.publish('Gantttasks', function(){
      return GantTasksCollection.find();
  });
  Meteor.publish('Ganttlinks', function(){
      return GantLinksCollection.find();
  });
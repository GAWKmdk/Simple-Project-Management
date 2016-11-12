Template.project_Scrumboard.helpers({
  
    incompleteCount: function incompleteCount() {
      return Tasks.find({checked: {$ne: true}}).count();
    },
  });

    
    

  Template.project_Scrumboard.events({
    

    'click .updateUser': function updateUser() {
      Meteor.call('updateUser');
    },

    'submit .addList': function addList(e) {
      e.preventDefault();

      let newListTitle = document.getElementById('newListTitle');
      Meteor.call('newList', newListTitle.value, 1);

      newListTitle.value = '';
    },

    'submit .addTask': function addTask(e) {
      e.preventDefault();

      let newTaskText = $(e.currentTarget).find('input');
      let currentTopObject = Blaze.getData($(e.target)
                                  .parent().find('.list-item')[0]);

      let currentTopOrder = currentTopObject ? currentTopObject.order : 1;

      Meteor.call('addTask', newTaskText.val(), currentTopOrder - 1, this._id);

      newTaskText.val('');
    },
  });
    
    
ProfileController = AppController.extend({
  data: {
//users: Users.find({})
  },
   waitOn: function() {
    return this.subscribe('users');
  },
  onAfterAction: function () {
    Meta.setTitle('Profile');
  }
});
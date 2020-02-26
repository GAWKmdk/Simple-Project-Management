Template.todolist.rendered = function() {

};

Template.todolist.events({
  "click [data-action='add-item']": function (e) {

      
    // Prevent default button click behavior
    e.preventDefault();
      

      
    // Insert the form data into the "Items" collection
    Items.insert({
      name: $("[name='name']").val(),
      rating: $("[name='rating']").val(),
        user: $("[name='user']").val()
    });

    // Hide the bootstrap modal once we submit the form
    $('#addItemModal').modal('hide');
      //clears form
      $("[name='name']").val('');
      $("[name='rating']").val('');
      Bert.alert( 'Item Added Successfully', 'success', 'growl-bottom-right', 'fa-check' );
      
      
      
      
  },
     "click .delete": function (event) {
       
         event.preventDefault();
         var confirm = window.confirm("Delete this task?");
         
         if(confirm){
         Items.remove(this._id);
          Bert.alert( 'Item Deleted', 'info', 'growl-bottom-right', 'fa-trash' );   
         }
      },
    
    'keyup [name=todolist]': function (event) {
                
             
             var itemId = this._id;
             var currentUser = Meteor.user().username;
             var began=new Date();
             var todolist= $(event.target).val();
        
             Items.update({ _id: itemId}, {$set: {name:todolist, user: currentUser, createdAt: began}});
             Bert.alert( 'Item Updated', 'success', 'growl-bottom-right', 'fa-check' );
                
         console.log("Task changed to: " + todolist);
        
         
      }

});


Template.todolist.helpers({
  
  });
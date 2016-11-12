Template.colab.rendered = function() {

    
     Meteor.subscribe('Gantttasks');
    Meteor.subscribe('Ganttlinks');

    
};

Template.Gantt.events({
      'focus #date_start': function(e, template){
          var f = Template.instance().$('#date_start');
          f.bootstrapMaterialDatePicker({format:'YYYY-MM-DD', time: false});
      },
      'focus #date_end': function(e, template){
          var f = Template.instance().$('#date_end');
          f.bootstrapMaterialDatePicker({format:'YYYY-MM-DD', time: false});
      },
      'change #date_start': function(e, template){
          var date_start = $('[name="date_start"]').val().split("-");
          gantt.config.start_date = new Date(date_start[0], date_start[1], date_start[2]);
          gantt.render();
      },
      'change #date_end': function(e, template){
          var date_end = $('[name="date_end"]').val().split("-");
          gantt.config.end_date = new Date(date_end[0], date_end[1], date_end[2]);
          gantt.render();
      }
    });



Template.colab.helpers({
  
    
  });
Template.calendar.rendered = function(){
    
 
    
    function clickToday() {
  $('.fc-button-today').click();
}
    
     $('#calendarrefresh').click( function() {
    
    window.setTimeout(clickToday, 200);
     
      
});
        
    
    
   $calendar = $('#projectCalendar');
    
  var calendar = $calendar.fullCalendar({


    dayClick:function(date,jsEvent,jsEvent,view){
      var ce = {};
      ce.start = new Date(date);
      ce.end = ce.start;
     
      ce.color = 'purple';
         ce.className = 'todo';
      ce.project = Session.get('active_project');
      ce.title = ' New Milestone'; //var addtltext = '';
        
        ce.information = 'undefined details'; // var addtlpart = '';
        ce.location = 'undefined location';  //  var addtllocation = '';
        ce.staff = 'undefined staff';  //var addtlperson = '';
      ce.owner = Meteor.user().username;
      Meteor.call('addCalEvent',ce);
    },
    
    eventClick:function(calEvent,jsEvent,view){
        
    Meteor.setTimeout(function(){
        
          if(calEvent.type === 'event_milestone'){
          Session.set('eventttype', 'event_milestone');
        }
         if(calEvent.type === 'general_meeting'){
          Session.set('eventttype', 'general_meeting');
        }
        
         if(calEvent.type === 'event_notice'){
          Session.set('eventttype', 'event_notice');
        }
        
         if(calEvent.type === 'due_date'){
          Session.set('eventttype', 'due_date');
        }
        
          if(calEvent.type === 'hours_assigned'){              
          Session.set('eventttype', 'hours_assigned');
        }
        
            
          if(calEvent.type === 'training'){
          Session.set('eventttype', 'training');
        }
        
        if(calEvent.type === 'worksite_maintance'){
          Session.set('eventttype', 'worksite_maintance');
        }
        
        if(calEvent.type === 'client_meeting'){
          Session.set('eventttype', 'client_meeting');
        }
        if(calEvent.type === 'staff_holiday'){
          Session.set('eventttype', 'staff_holiday');
        }       
        
          if(calEvent.type === 'todo'){
          Session.set('eventttype', 'todo');
        }
          if(calEvent.type === 'active'){
          Session.set('eventttype', 'active');
        }
          if(calEvent.type === 'flagged'){
          Session.set('eventttype', 'flagged');
        }
          if(calEvent.type === 'review'){
          Session.set('eventttype', 'review');
        }
          if(calEvent.type === 'sprint'){
          Session.set('eventttype', 'sprint');
        }
          if(calEvent.type === 'completed'){
          Session.set('eventttype', 'completed');
        }
         
          
        $('.taskTitle').val(calEvent.type);
        $('.name').val(calEvent.title);
        
        $('.staff').val(calEvent.staff);
        $('.location').val(calEvent.location);
        $('.information').val(calEvent.information);
        
    
       //   ce.title = ' New Milestone'; //var addtltext = '';
       // ce.information = ''; // var addtlpart = '';
       // ce.location = '';  //  var addtllocation = '';
      //  ce.staff = '';  //var addtlperson = '';
        
          
      },750);
        
      Session.set('editing_calevent',calEvent._id);
    },
    
      eventResize: function(reqEvent){
      Meteor.call('updateEventTimes',reqEvent);
    },
      
    eventDrop:function(reqEvent){
      Meteor.call('updateEventTimes',reqEvent);
    },
    events:function(start,end,callback){
      var calEvents = Calevents.find({project:Session.get('active_project')},{reactive:false}).fetch();
        
      //console.log(calEvents);
      callback(calEvents);
    },
    eventRender:function(evt,ele){
        
        var bkgrd = 'purple';
        var icon = 'fa-edit';
        
        
        var addtltext = '';
        var addtlperson = '';
        var addtlpart = '';
        var addtllocation = '';
      
        // frequent label events
        
             
        if(evt.type === 'due_date'){
             bkgrd = '#FF0033 ';
            icon = 'fa-bullseye';
            addtltext = '&nbsp;DUE DATE' ;
            addtlperson = '';
           addtlpart = '';
           addtllocation = '';
        }
        
        if(evt.type === 'flagged'){
             bkgrd = '#FF0033 ';
            icon = 'fa-flag-checkered';
            addtltext = ' PRJ FLAGGED' ;
            addtlperson = '';
           addtlpart = '';
           addtllocation = '';
        }
         if(evt.type === 'sprint'){
             bkgrd = '#FF0033 ';
            icon = 'fa-flash';
             addtltext = ' PRJ SPRINT' ;
            addtlperson = '';
           addtlpart = '';
           addtllocation = '';
        }  
        
        if(evt.type === 'event_notice'){
             bkgrd = '#FF6600';
            icon = 'fa-bell';
            addtltext = '&nbsp;Notice Read' ;
            addtlperson = '';
           addtlpart = '';
           addtllocation = '';
        }       
        
         
        if(evt.type === 'review'){
             bkgrd = '#FF3300';
            icon = 'fa-bookmark';
            addtltext = ' PRJ REVIEW' ;
            addtlperson = '';
           addtlpart = '';
           addtllocation = '';
        }       
        
       if (evt.type === 'hours_assigned'){
            bkgrd = 'teal';
            icon = 'fa-clock-o';
            addtltext = '&nbsp;: Hours' ;
            addtlperson = '';
            addtlpart = '';
           addtllocation = '';
        }
        
        
         if(evt.type === 'general_meeting'){
             bkgrd = '#9933CC';
            icon = 'fa-coffee';
            addtltext = '&nbsp;Staff Meeting';
               addtlperson = '';
           addtlpart = '';
           addtllocation = '';
        }
        
       
        if(evt.type === 'training'){
             bkgrd = '#CCCC00';
            icon = 'fa-certificate';
            addtltext = '&nbsp;TRAINING LOG' ;
            addtlperson = '';
           addtlpart = '';
           addtllocation = '';
        } 
        
         if(evt.type === 'client_meeting'){
            bkgrd = '#9933CC';
            icon = 'fa-briefcase';
            addtltext = '&nbsp;CLIENT MEETING' ;
            addtlperson = '';
           addtlpart = '';
           addtllocation = '';
        } 
        if(evt.type === 'worksite_maintance'){
             bkgrd = '#CCCC00';
            icon = 'fa-wrench';
             addtltext = '&nbsp;MAINTANCE DAY' ;
            addtlperson = '';
           addtlpart = '';
           addtllocation = '';
        } 
                  
       if(evt.type === 'staff_holiday'){
             bkgrd = '#993399';
            icon = 'fa-plane';
            addtltext = '&nbsp;HOLIDAY' ;
            addtlperson = '';
           addtlpart = '';
           addtllocation = '';
        }  
       
          if(evt.type === 'active'){
             bkgrd = '#00CC00';
            icon = 'fa-star';
            addtltext = ' PRJ ACTIVE' ;
            addtlperson = '';
           addtlpart = '';
           addtllocation = '';
        }
        
            
        if(evt.type === 'completed'){
             bkgrd = '#009900';
            icon = 'fa-trophy';
           addtltext = ' PRJ COMPLETE' ;
            addtlperson = '';
           addtlpart = '';
           addtllocation = '';
        } 
          
       
        
        //project events && generate on to-do made using date match if possible
        
       // if(evt.type === 'todo'){
          //   bkgrd = 'lime';
         //   icon = 'fa-rocket';
        //    addtltext = ' PRJ TODO' ;
        //    addtlperson = '';
        //   addtlpart = '';
        //   addtllocation = '';
       // }  
      
       
        
        var html = ' <div style="font-size:11px; padding:2px; background-color:' + bkgrd;
        html += ';color:white"><span style="font-align:right;"> '+ '&nbsp;' ;
        html += evt.title + '&nbsp;' + addtltext + '&nbsp;<i style="font-size:12px;" class="fa ' + icon + '"></i></span>&nbsp;<br><span style="font-size:10px;"><b><i style="font-size:12px;" class="fa fa-info">-</i>&nbsp;</b>' + evt.information + addtlpart + '<br><b><i style="font-size:12px;" class="fa fa-users">-</i>&nbsp;</b> ' + evt.staff + addtlperson + '<br><b><i style="font-size:12px;" class="fa fa-map-marker">-</i>&nbsp;</b>' + evt.location + addtllocation + '</span><br></div>';
       
        ele.html(html);
            
    },
    header:{
      left:'title',
     // center:'month,agendaWeek,agendaDay',
        center:'month,basicWeek,basicDay',
      right:'prev,today,next'
    },
    contentHeight:640,
    theme:false,
   
      defaultView:'basicWeek',
    selectable:true,
    selectHelper:true,
    editable:true,
         
    fixedWeekCount: false
  }).data().fullCalendar;
    
  Deps.autorun(function(){
    Calevents.find({}).fetch();
    if(calendar){
      calendar.refetchEvents();
       
    }
  })

}
         
Template.caltask.events({
  'click .closeTask':function(evt,tmpl){
    Session.set('editing_calevent',null);
  },
  'click .deleteCalTask':function(evt,tmpl){
    Meteor.call('removeCalEvent',Session.get('editing_calevent'));
    Session.set('editing_calevent',null);
  }
  ,
  'click .saveCalTask':function(evt,tmpl){
    var type = tmpl.find('.taskTitle').value;
      
    if(tmpl.find('.name')){
      var name = tmpl.find('.name').value;
        
        var staff = tmpl.find('.staff').value;
        var information = tmpl.find('.information').value;
        var location = tmpl.find('.location').value;
        
      var calevent = {};
      calevent._id = Session.get('editing_calevent');
      calevent.title = name;
      calevent.type = type;
        
        calevent.staff = staff;
        calevent.information = information;
        calevent.location = location;
        
        
      calevent.project = Session.get('active_project');
      Meteor.call('updateCalEvent',calevent);
    }
    Session.set('editing_calevent',null);
  },
    
  'change .taskTitle':function(evt,tmpl){
    var typeselected = evt.target.value;
    Session.set('eventttype', typeselected);
  }
})
Template.projectView.helpers({
  editing_calevent: function () {
    return Session.get('editing_calevent');
  },
  evttype_milestone: function () {
  //  console.log('evttypemilestone',Session.equals('eventttype', 'milestone'));
    return Session.equals('eventttype', 'milestone');
  },
  evttype_eventnotice: function () {
   // console.log('evttypeeventnotice',Session.equals('eventttype', 'event_notice'));
    return Session.equals('eventttype', 'event_notice');
  },
  evttype_genericmeeting: function () {
   // console.log('evttypegenericmeeting',Session.equals('eventttype', 'general_meeting'));
    return Session.equals('eventttype', 'general_meeting');
  },
  evttype_duedate: function () {
  //  console.log('evttypebrainstorm',Session.equals('eventttype', 'due_date'));
    return Session.equals('eventttype', 'due_date');
  },
  evttype_hoursworked: function () {
  //  console.log('evttypemaintance',Session.equals('eventttype', 'hours_assigned'));
    return Session.equals('eventttype', 'hours_assigned');
  },
  evttype_training: function () {
  //  console.log('evttypetraining',Session.equals('eventttype', 'training'));
    return Session.equals('eventttype', 'training');
  },
  evttype_reviewmeeting: function () {
   // console.log('evttypereviewmeeting',Session.equals('eventttype', 'review'));
    return Session.equals('eventttype', 'review');
  },
  evttype_clientmeeting: function () {
   // console.log('evttypeclientmeeting',Session.equals('eventttype', 'client_meeting'));
    return Session.equals('eventttype', 'client_meeting');
  },
    
    
  evttype_launchnch: function () {
  //  console.log('evttypelaunchnch',Session.equals('eventttype', 'active'));
    return Session.equals('eventttype', 'active');
  },
  evttype_award: function () {
   // console.log('evttypelocation',Session.equals('eventttype', 'completed'));
    return Session.equals('eventttype', 'completed');
  },
    
  evttype_location: function () {
  //  console.log('evttypeaward',Session.equals('eventttype', 'worksite_maintance'));
    return Session.equals('eventttype', 'worksite_maintance');
  },
    
  evttype_holiday: function () {
  //  console.log('evttypemholiday',Session.equals('eventttype', 'staff_holiday'));
    return Session.equals('eventttype', 'staff_holiday');
  },
    
  //  evttype_staffparty: function () {
  //  console.log('evttypestaffparty',Session.equals('eventttype', 'todo'));
  //  return Session.equals('eventttype', 'todo');
  //},
    evttype_companysports: function () {
 //   console.log('evttypecompanysports',Session.equals('eventttype', 'flagged'));
    return Session.equals('eventttype', 'flagged');
  },
    
    
  evttype_socialmediacampaign: function () {
  //  console.log('evttypesocialmediacampaign',Session.equals('eventttype', 'sprint'));
    return Session.equals('eventttype', 'sprint');
  }
     
});


Template.caltask.helpers({
  editing_calevent: function () {
    return Session.get('editing_calevent');
  },
  evttype_milestone: function () {
  //  console.log('evttypemilestone',Session.equals('eventttype', 'milestone'));
    return Session.equals('eventttype', 'milestone');
  },
  evttype_eventnotice: function () {
   // console.log('evttypeeventnotice',Session.equals('eventttype', 'event_notice'));
    return Session.equals('eventttype', 'event_notice');
  },
  evttype_genericmeeting: function () {
 //   console.log('evttypegenericmeeting',Session.equals('eventttype', 'general_meeting'));
    return Session.equals('eventttype', 'general_meeting');
  },
  evttype_duedate: function () {
  //  console.log('evttypebrainstorm',Session.equals('eventttype', 'due_date'));
    return Session.equals('eventttype', 'due_date');
  },
  evttype_hoursworked: function () {
   // console.log('evttypemaintance',Session.equals('eventttype', 'hours_assigned'));
    return Session.equals('eventttype', 'hours_assigned');
  },
  evttype_training: function () {
  //  console.log('evttypetraining',Session.equals('eventttype', 'training'));
    return Session.equals('eventttype', 'training');
  },
  evttype_reviewmeeting: function () {
 //   console.log('evttypereviewmeeting',Session.equals('eventttype', 'review'));
    return Session.equals('eventttype', 'review');
  },
  evttype_clientmeeting: function () {
  //  console.log('evttypeclientmeeting',Session.equals('eventttype', 'client_meeting'));
    return Session.equals('eventttype', 'client_meeting');
  },
    
    
  evttype_launchnch: function () {
  //  console.log('evttypelaunchnch',Session.equals('eventttype', 'active'));
    return Session.equals('eventttype', 'active');
  },
  evttype_award: function () {
 //   console.log('evttypelocation',Session.equals('eventttype', 'completed'));
    return Session.equals('eventttype', 'completed');
  },
    
  evttype_location: function () {
  //  console.log('evttypeaward',Session.equals('eventttype', 'worksite_maintance'));
    return Session.equals('eventttype', 'worksite_maintance');
  },
    
  evttype_holiday: function () {
  //  console.log('evttypemholiday',Session.equals('eventttype', 'staff_holiday'));
    return Session.equals('eventttype', 'staff_holiday');
  },
    
  //  evttype_staffparty: function () {
  //  console.log('evttypestaffparty',Session.equals('eventttype', 'todo'));
  //  return Session.equals('eventttype', 'todo');
  //},
    evttype_companysports: function () {
  //  console.log('evttypecompanysports',Session.equals('eventttype', 'flagged'));
    return Session.equals('eventttype', 'flagged');
  },
    
    
  evttype_socialmediacampaign: function () {
  //  console.log('evttypesocialmediacampaign',Session.equals('eventttype', 'sprint'));
    return Session.equals('eventttype', 'sprint');
  }
    
});


//// invites

Template.caltask.helpers({

'userList': function() {

return Meteor.users.find();
},
'invited': function() {

var project = Projects.findOne({_id:Session.get('active_project')});
return Meteor.users.find({_id:{$in:project.invited}});
},
'isowner':function(parent){
return parent.userId === Meteor.userId();
}

});

Template.caltask.events({

'click .inviteUser': function(evt, tmpl) {

var user = tmpl.find('#userToInvite').value;
var project = Session.get('active_project');
Meteor.call('inviteUser', project,user);
},
'click .removeUser':function(evt,tmpl){
var user = this._id;
var project = Session.get('active_project');
Meteor.call('removeInvite', project,user);
}
})
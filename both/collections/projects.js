Projects = new Meteor.Collection('projects'),
      
    projectIndex = new EasySearch.Index({
    collection: Projects,
    fields: ['dateentered','lastupdate','duedate','name','customer','author'],
    
     defaultSearchOptions: {
   // sortBy: 'lastupdate',
    limit: 6, // could also have skip and props
  },
   
    
    engine: new EasySearch.Minimongo({
        
        
    sort: function (searchObject, options) {
      const sortBy = options.search.props.sortBy;
    
        //sort mongo sort specificer
         if ('lastupdate' === sortBy) {
        return {
          lastupdate: -1
        };
      } else if ('dateentered' === sortBy) {
        return {
          dateentered: -1
        };
      
        } else if ('duedate' === sortBy) {
        return {
          datedue: -1
        };
      
        } else if ('nameasc' === sortBy) {
        return {
          name: 1
        };
         } else if ('namedesc' === sortBy) {
        return {
          name: -1
        };                                 
      } else if ('customerasc' === sortBy) {
        return {
          customer: 1
        };
     } else if ('customerdesc' === sortBy) {
        return {
          customer: -1
        };
      } else if ('authorasc' === sortBy) {
        return {
          author: 1
        };
     } else if ('authordesc' === sortBy) {
        return {
          author: -1
        };
      }
        else {
       return {
          datedue: 1
        };
      }
        
    }
    })
  });




//schema
Projects.allow({
    
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


Projects.helpers({

});


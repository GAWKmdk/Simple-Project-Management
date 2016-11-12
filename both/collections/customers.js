Customers = new Meteor.Collection('customers'),
      
    customerIndex = new EasySearch.Index({
    collection: Customers,
    
    fields: ['datecreate','lastupdate','name','company','role','username','country','website','email','phone'],
    
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
      } else if ('datecreate' === sortBy) {
        return {
          datecreate: -1
        };
      
        } else if ('nameasc' === sortBy) {
        return {
          name: 1
        };
         } else if ('namedesc' === sortBy) {
        return {
          name: -1
        };                                 
      } else if ('companyasc' === sortBy) {
        return {
          company: 1
        };
     } else if ('companydesc' === sortBy) {
        return {
          company: -1
        };
      }
        else {
       return {
          username: 1
        };
      }
        
    }
    })
  });



//schema
Customers.allow({
    
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


Customers.helpers({

});

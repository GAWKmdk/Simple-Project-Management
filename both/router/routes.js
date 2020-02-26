
//router config
Router.configure({
	layoutTemplate: 'appLayout'
});


//Login Security Redirective
Router.plugin('ensureSignedIn', {
    except: ['home', 'atSignIn', 'atSignUp', 'atForgotPassword', 'help', 'privacy', 'terms-of-use'],
  only: ['dashboard','profile','archives','roles','/projects/:id','listings']
});

    

Router.route('/', {
  name: 'home',
    layoutTemplate: 'appLayout',
    controller: 'HomeController'
});


// Profile Route
Router.route('/profile', {
  name: 'profile',
    layoutTemplate: 'appLayout',
  controller: 'ProfileController'
  
});



// Dashboard Route
Router.route('/dashboard', {
  name: 'dashboard',
    layoutTemplate: 'appLayout',
  controller: 'DashboardController',
   
});

// Project View Route
Router.route('/projects/:id', {
  name: 'projectView',
    layoutTemplate: 'appLayout',
  controller: 'ProjectViewController'
});


// Listing or customers Route
Router.route('/listings', {
  name: 'listings',
     layoutTemplate: 'appLayout',
  controller: 'ListingController'
  
});

// Team Roles Route
Router.route('/roles', {
  name: 'roles',
    layoutTemplate: 'appLayout',
  controller: 'RoleController'
  
});


// Archive Route
Router.route('/archives', {
  name: 'archives',
    layoutTemplate: 'appLayout',
  controller: 'ArchiveController'
  
});

// Post-it wall Route
//Router.route('/todolist', {
 // name: 'todolist',
 //   layoutTemplate: 'appLayout',
//  controller: 'TodoController'
// });

// Privacy Route
Router.route('/privacy', {
  name: 'privacy',
    layoutTemplate: 'appLayout'
    
});
// Help Route
Router.route('/help', {
  name: 'help',
    layoutTemplate: 'appLayout'
});
// Contact Us Route
Router.route('/contactus', {
  name: 'contactus',
    layoutTemplate: 'appLayout'
});

// Terms of Use Route
Router.route('/terms-of-use', {
  name: 'terms-of-use',
    layoutTemplate: 'appLayout'
});




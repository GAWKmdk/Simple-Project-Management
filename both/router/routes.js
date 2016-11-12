

Router.route('/', {
  name: 'home',
    controller: 'HomeController'
});


// Profile Route
Router.route('/profile', {
  name: 'profile',
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
  controller: 'ListingController'
  
});

// Team Roles Route
Router.route('/roles', {
  name: 'roles',
  controller: 'RoleController'
  
});


// Archive Route
Router.route('/archives', {
  name: 'archives',
  controller: 'ArchiveController'
  
});

// Post-it wall Route
Router.route('/todolist', {
  name: 'todolist',
  controller: 'TodoController'
});

// Privacy Route
Router.route('/privacy', {
  name: 'privacy'
});
// Help Route
Router.route('/help', {
  name: 'help'
});
// Contact Us Route
Router.route('/contactus', {
  name: 'contactus'
});

// Terms of Use Route
Router.route('/terms-of-use', {
  name: 'terms-of-use'
});

// ForgotPwd Route
Router.route('forgotPwd', {
  name: 'forgotPwd'
});


//Login Security Redirective
Router.plugin('ensureSignedIn', {
    //except: ['home', 'atSignIn', 'atSignUp', 'atForgotPassword','admin','privacy', 'terms-of-use']
    only: ['dashboard','profile','archives','roles','/projects/:id','listings']
});

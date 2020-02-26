
AccountsTemplates.configure({
    // Behavior
     
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    socialLoginStyle: "popup",
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: true,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: '/privacy',
    termsUrl: '/terms-of-use',

    // Redirects
    homeRoutePath: '/',
    redirectTimeout: 4000,
    
    //defaults
    //defaultTemplate: '/home',
    //defaultLayout: 'appLayout',

    // Hooks
    //onLogoutHook: myLogoutFunc,
    //onSubmitHook: mySubmitFunc,
    //preSignUpHook: myPreSubmitFunc,
    //postSignUpHook: myPostSubmitFunc,
    
    
   

    // Texts
    texts: {
      button: {
          signUp: "Register",
          signIn: "SignIn"
      },
        inputIcons: {
          isValidating: "fa fa-spinner fa-spin",
          hasSuccess: "fa fa-check",
          hasError: "fa fa-times",
      },
      socialSignUp: "SignUp",
        socialSignIn: "SignIn",
        termsPreamble: "clickAgree",
      socialIcons: {
          "meteor-developer": "fa fa-rocket"
      },
      title: {
          forgotPwd: "Recover Your Password"
      },
    },
});


var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: "username",
      type: "text",
      displayName: "Full Name",
      required: true,
      minLength: 5,
  },
  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "email",
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Invalid email',
  },
  pwd,
       
   {
        _id: 'phone',
        type: 'tel',
        displayName: "Phone Number",
    },
    {
        _id: 'company',
        type: 'text',
        displayName: "Company",
    },
    {
        _id: 'position',
        type: 'text',
        displayName: "Position",
    },
    {
        _id: 'location',
        type: 'text',
        displayName: "City, Country",
    },
    
   { _id: 'subscription', //Add a school select to the form
        type: 'select',
        displayName: 'Subscription Type',
        select: [],
        template: "selectSubscripte",
        errStr: 'Select a Subscription Modal',
        func: function(value){
            if (Meteor.isClient) {
                    console.log("Logging in..." + value);
                Bert.alert( 'Signing In ...', 'info', 'growl-bottom-right', 'fa-check-circle' );
                    this.setSuccess();
                    // or this.setError(userExists);
                    this.setValidating(false);

                    return;
            }
        },
        negativeValidation: true,
    }
    
]);



AccountsTemplates.configureRoute('signIn', {layoutTemplate: 'appLayout', redirect: '/dashboard',});
AccountsTemplates.configureRoute('signUp', {layoutTemplate: 'appLayout', redirect: '/profile',});


AccountsTemplates.configureRoute('ensureSignedIn', {layoutTemplate: 'appLayout'}); 



AccountsTemplates.configureRoute('changePwd', {layoutTemplate: 'appLayout'}); 
AccountsTemplates.configureRoute('forgotPwd', {layoutTemplate: 'appLayout'}); 
AccountsTemplates.configureRoute('resetPwd', {layoutTemplate: 'appLayout'}); 
AccountsTemplates.configureRoute('verifyEmail', {layoutTemplate: 'appLayout'}); 
AccountsTemplates.configureRoute('enrollAccount', {layoutTemplate: 'appLayout'}); 



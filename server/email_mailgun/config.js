Meteor.startup(function() {
    
    //process.env.MAIL_URL='smtp://postmaster%40sandboxe10bc4943b8e49a4b85101e9045c0181.mailgun.org:f8dabe8ab5f1b40866f606bcacf0f7f0@smtp.mailgun.org:587'
    

  Meteor.Mailgun.config({
    username: 'postmaster@domain.com',
    password: 'password-goes-here'
  });

  Meteor.methods({
    'sendContactEmail': function(name, email, message) {
      this.unblock();

      Meteor.Mailgun.send({
        to: 'recipient@example.com',
        from: name + ' <' + email + '>',
        subject: 'New Contact Form Message',
        text: message,
        html: Handlebars.templates['contactEmail']({siteURL: Meteor.absoluteUrl(), fromName: name, fromEmail: email, message: message})
      });
    },
      
  });
});


//send email 

//Meteor.call('sendEmail',{
  //  to: 'whoItsTo@theDomain.com',
 //   from: 'no-reply@where-ever.com',
 //   subject: 'I really like sending emails with Mailgun!',
 //   text: 'Mailgun is totally awesome for sending emails!',
 //   html: 'With meteor it&apos;s easy to set up <strong>HTML</strong> <span style="color:red">emails</span> too.'
 // });
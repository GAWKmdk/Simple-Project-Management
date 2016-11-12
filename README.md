# meteor-project management -boilerplate

A starting point for a MeteorJS applications. Includes numerous features:

* Add projects, edit project, delete projects, search
* Add contacts, edit contacts, delete contacts, search
Within the projects you can - 
-> Edit due dates, edit client details
-> Add existing users or invite them
?? This needs to be configured to email invite in addition to email verification
-> Leave messages for existing users
??Archieve message (This works but the archieve section needs some bug linting to display correctly)
??Have a direct chat (This works in basic but could use role management and own channel creation -- like a simplified slack -- see ext.branch for build)
-> Add, Edit and Delete events to a calendar
-> See a basic list of activities on the calendar
-> Upload, edit, Delete any type of files
-> Add notes to files and archieve the notes and files.
??Archieve (This sorta works, you can archieve them but bug linting needs to be done since if you go into the archieve it will only shows the active session projects by files or by comments or by calendar dates not by all three at a time unless you refresh the browser)
-> Create a basic Scrumboard / Kanban board with columns, cards and checkoffs
?? This is still very hacky since the drag and drop doesn't work, the css is still very cardboard cut up and the color labeling still defaults when the browser refreshes if you haven't saved the card during edit


Things to finish ( As in the code base is there but it needs time and love to finish )

- Animations and CSS clean up 
- Clean up calendar so icons and event type colors are more brand unicentric
- Add the time and date generated as a tooltip hover on the calendar
- Accounts = add atleast three proper roles [ Project Manager, Local staff, Remote staff, Consultant, Financier, Angel, etc ]
- Finish FAQ with accordian (finish questions)
- Finish Bug report by connecting WEB API screenshot feature and connect to email
- Finish Contact us by css clean up and connect to email
- Finish carousel Tutorial with modal clean and copywritten run through
- Finish registration hook for subscription type (Link to Stripe)
- local storage - setup minimongo and ionic so you can use Storedtokens and offline usage = new Mongo.collection(null)
- Finish the scrum board so all board can be moved, align in column hierarchy by date/complete and or recent status change
- Add tooltips to side menu
- Make side menu slide in and out
- Finish setting up the bert notifications for created event, created project, created contact, delete, edit, archive, new invite, file upload, file delete ,file archieve and for add, edit, delete on scrumboard
- Finish integrating slatebox package (for simple realtime sketching with collaboration without websockets)
- Finish integrating snippet package (for simple code blueprint snippet sharing - it looks like piniterest)
- Finish integrating gantt package (for simple gantt charts)
- Finish setting up webtempest animations for modals, calendar, comments and upload
- general responsiveness of sidebar and calendar for tablet (no mobile? )
- consider local storage if go with ionic/cordova/android/ios mixins
- General email-like feature to profile and "email this" -> file or comment (activity update) button 






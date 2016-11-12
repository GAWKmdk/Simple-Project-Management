 Template.hack.onRendered(function afterRender() {
  
     Blaze.getView('body').templateInstance().$('.list').sortable({
      placeholder: 'droppable',
      connectWith: '.list',
      items: 'li',
        //colorlabel = ui.item.configure
        //columnlabel = let ui.item = item.configure if(!colorlable let default = !)
        //

      start: function start(e, ui) {
        ui.placeholder.height(ui.item.outerHeight());
        ui.item.addClass('dragged');
      },

      stop: function stop(e, ui) {
        ui.item.removeClass('dragged');

        let newOrder;
        let newListId = Blaze.getData($(ui.item.get(0)).parent()[0])._id;

        let el = ui.item.get(0);
        let before = ui.item.prev().get(0);
        let after = ui.item.next().get(0);
        

        // !before should be impossible because task will, at the least,
        // be dropped below new task form

        // this will fail if there is ever a non-task item at the bottom of
        // a '.list'

        if (!after) {
          // no task below dropped task
          if (Blaze.getData(before).order === 0) {
            //handles falsyness of 0
            newOrder = Blaze.getData(before).order + 1;
          } else if (!Blaze.getData(before).order) {
            newOrder = 0;
          } else {
          // dropped list item is bottom of list
            newOrder = Blaze.getData(before).order + 1;
          }
        } else if (Blaze.getData(before).order === 0) {
          // handles falsiness of zero
          newOrder = Blaze.getData(after).order / 2;
        } else if (!Blaze.getData(before).order) {
          // dropped task is at top of list
          newOrder = Blaze.getData(after).order - 1;
        } else {
          // dropped task is in between two tasks
          newOrder = (Blaze.getData(after).order +
                      Blaze.getData(before).order) / 2;
        }

        Meteor.call('updateOrder', Blaze.getData(el)._id,
                     newOrder, newListId);
      },
    });
  });
// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({



  //tagName: 'tr',

  template: _.template('<div class="list-group-item"><span>(<%= artist %>)</span><span><%= title %></span></div>'),
  //
  //<div class="list-group-item">

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});

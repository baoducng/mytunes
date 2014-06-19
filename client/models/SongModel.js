// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    console.log('clicked', this);
    //play is a default method on the html tag
    //TODO: where can we access this play method?
  },
   enqueue: function(){
    this.trigger('enqueue',this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);

  }



});

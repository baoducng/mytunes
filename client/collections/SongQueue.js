// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    this.on('add', function(song){
      if (this.length === 1){
        song.play();
      }
    });

    this.on('remove', function(song){
      if (this.length){
        this.playFirst();
      }
    });



  },

  playFirst: function(){
    this.models[0].play();
  }


});

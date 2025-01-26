/*
  Question:
  Create a Playlist constructor that initializes with an empty songs array. 
  Add a method addSong(song) to the prototype that adds a new song to the playlist.

  Description:
  Implement a constructor function Playlist that initializes an empty songs array.
  Attach a method addSong(song) to its prototype that adds the song to the songs array.

  Function: Playlist
  Description: Constructor function for creating Playlist objects.

  @property {Array} songs - An array storing the songs in the playlist.

  Method: addSong
  Description: Adds a new song to the songs array.

  @param {string} song - The song to be added.

  @returns {void}
*/

function Playlist() {
  this.songs = [];
}

Playlist.prototype.addSong = function (song) {
  this.songs.push(song);
};

// Export the function for reuse in other modules
module.exports = Playlist;
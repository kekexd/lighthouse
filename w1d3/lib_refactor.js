var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

  printPlaylists: function(){
    for(var p in this.playlists){
      var pls = this.playlists;
      console.log(p + ': ' + pls[p].name + ' - ' + pls[p].tracks.length + ' tracks');
    }
  },

  printTracks: function(){
    for(var t in this.tracks){
      var trks = this.tracks;
      console.log(t + ': ' + trks[t].name + ' by ' + trks[t].artist + ' (' + trks[t].album + ')')
    }
  },

  printPlaylist: function (playlistId) {
    var pls = this['playlists'][playlistId];
    var trks = this['tracks'];
    console.log(playlistId + ': ' + pls['name'] + ' - ' + pls['tracks'].length + ' tracks');
    for(var t of pls['tracks']){
      console.log(t + ': ' + trks[t]['name'] + ' by ' + trks[t]['artist'] + ' (' + trks[t].album + ')');
    }
  },

  addTrackToPlaylist: function (trackId, playlistId) {
    this['playlists'][playlistId]['tracks'].push(trackId);
  },

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },


  addTrack: function (name, artist, album) {
    var tId = this.uid();
    this['tracks'][tId] = {
      id: tId,
      name: name,
      artist: artist,
      album: album
    }
  },

  addPlaylist: function (name) {
    var pId = this.uid();
    library['playlists'][pId] = {
      id: pId,
      name: name,
      tracks: []
    }
  }


}

//library.printPlaylists();
//library.printTracks();
//library.printPlaylist('p01');
//library.addTrackToPlaylist('t01', 'p02');
//console.log(library.playlists.p02)
// library.addTrack('ds', 'dsf', 'dsafd')
// console.log(library.tracks)
// library.addPlaylist('New Playlist');
// console.log(library.playlists);

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

// var printPlaylists = function () {
//   for(var p in library.playlists){
//     var pls = library.playlists;
//     console.log(p + ': ' + pls[p].name + ' - ' + pls[p].tracks.length + ' tracks');
//   }
// }

//printPlaylists(library);

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)


//printTracks(library);


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)



//printPlaylist('p01')

//adds an existing track to an existing playlist



//addTrackToPlaylist('t01', 'p02');
// generates a unique id
// (use this for addTrack and addPlaylist)



//addTrack('ds', 'dsf', 'dsafd');



// adds a playlist to the library


//addPlaylist('New playlist');



// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {
  //for(var i in library['tracks']['t01']){
    console.log(Object.values(library['tracks']['t01']).toString().search(query))

  //}

}

//printSearchResults('Code');

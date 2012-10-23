'use strict';

function JukeBox() {}
JukeBox.prototype = {
  credit: 0,
  songs: {},
  now: "none",

  reboot: function() {
    this.credit = 0;
    this.songs = {};
    this.now = "none";
  },

  deposit: function(payment) {
    if (payment === 0.25)
      this.credit += 1;
    else if (payment === 1.00)
      this.credit += 5;
    else if (payment === 5.00)
      this.credit += 25;
    else if (payment === 10.00)
      this.credit += 60;
  },

  credits: function() {
    return this.credit;
  },

  select: function(song) {
    if (song in this.songs) {
      var value = this.songs[song];
      if (this._use(value))
        this._play(song);
    }
  },

  _use: function(amount) {
    if (this.credit >= amount) {
      this.credit -= amount;
      return true;
    } else {
      return false;
    }
  },

  _play: function(song) {
    this.now = song;
  },

  add_song: function(song, credits) {
    this.songs[song] = credits;
  },

  now_playing: function() {
    return this.now;
  },

  song_finished: function() {
    this.now = "none";
  }
};

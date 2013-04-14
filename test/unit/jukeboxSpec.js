'use strict';

describe("JukeBox", function() {
  var jukebox;

  beforeEach(function() {
    jukebox = new JukeBox();
    jukebox.add_song("Stairway to Heaven", 1);
    jukebox.add_song("In-A-Gadda-Da-Vida", 2);
  });

  it("should play stairway to heaven for 0.25 dollar deposit", function() {
    jukebox.deposit(0.25);
    expect(jukebox.credits()).toEqual(1);
    spyOn(jukebox, '_use').andCallThrough();

    jukebox.select("Stairway to Heaven");

    expect(jukebox.credits()).toEqual(0);
    expect(jukebox._use).wasCalledWith(1);
    expect(jukebox.now_playing()).toEqual("Stairway to Heaven");

    jukebox.song_finished();
    expect(jukebox.now_playing()).toEqual("none");
  });

  it("should accumulate credits with deposits", function() {
    expect(jukebox.credits()).toEqual(0);
    jukebox.deposit(0.25);
    expect(jukebox.credits()).toEqual(1);

    jukebox.deposit(0.25);
    expect(jukebox.credits()).toEqual(1+1);

    jukebox.deposit(1.00);
    expect(jukebox.credits()).toEqual(1+1+5);

    jukebox.deposit(5.00);
    expect(jukebox.credits()).toEqual(1+1+5+25);

    jukebox.deposit(10.00);
    expect(jukebox.credits()).toEqual(1+1+5+25+60);
  });

});

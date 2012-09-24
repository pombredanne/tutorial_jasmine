describe("JukeBox", function() {
  
  beforeEach(function() {
    JukeBox.reboot();
    JukeBox.add_song("Stairway to Heaven", 1);
    JukeBox.add_song("In-A-Gadda-Da-Vida", 2);
  });


  it("should accumulate credits with payments", function() {
    expect(JukeBox.credits()).toEqual(0);
    JukeBox.deposit(0.25);
    expect(JukeBox.credits()).toEqual(1);

    JukeBox.deposit(0.25);
    expect(JukeBox.credits()).toEqual(1+1);

    JukeBox.deposit(1.00);
    expect(JukeBox.credits()).toEqual(1+1+5);

    JukeBox.deposit(5.00);
    expect(JukeBox.credits()).toEqual(1+1+5+25);

    JukeBox.deposit(10.00);
    expect(JukeBox.credits()).toEqual(1+1+5+25+60);
  });


  it("should play stairway to heaven for 0.25 dollar", function() {
    JukeBox.deposit(0.25);
    expect(JukeBox.credits()).toEqual(1);

    JukeBox.select("Stairway to Heaven");
    expect(JukeBox.credits()).toEqual(0);
    expect(JukeBox.now_playing()).toEqual("Stairway to Heaven");

    JukeBox.song_finished();
    expect(JukeBox.now_playing()).toEqual("none");
  });

});

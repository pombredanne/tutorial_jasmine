JukeBoxTest = TestCase("JukeBoxTest");

JukeBoxTest.prototype.setUp = function() {
    JukeBox.reboot();
    JukeBox.add_song("Stairway to Heaven", 1);
    JukeBox.add_song("In-A-Gadda-Da-Vida", 2);
};


JukeBoxTest.prototype.testPlayOneSong = function() {
    // should play stairway to heaven for 0.25 dollar
    JukeBox.deposit(0.25);
    assertEquals(JukeBox.credits(), 1);

    JukeBox.select("Stairway to Heaven");
    assertEquals(JukeBox.credits(), 0);
    assertEquals(JukeBox.now_playing(), "Stairway to Heaven");

    JukeBox.song_finished();
    assertEquals(JukeBox.now_playing(), "none");
};

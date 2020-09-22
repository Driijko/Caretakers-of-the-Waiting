function AudioPlayer() {

    // Layout
    // The layout variable is assigned an integer which identifies
    // what type of layout we want for the audio player's display.
    // This value is passed on to each part of the audio player so that
    // each part positions itself accordingly.
    if (width < 740) {
        this.layout = 0;
    }
    else {
        this.layout = 1;
    }
    

    // Create parts of audio player
    const playbackSection = new PlaybackSection(this.layout);
    const volumeSection = new VolumeSection(this.layout);

    const trackTitle = new TrackTitle(this.layout);

    this.display = function() {

        // Audio Player outline
        stroke(255);
        strokeWeight(5);
        fill(0);

        // Layout 0
        if (this.layout === 0) {
            rect((width/2) - 150, height - 190, 300, 180);
        }
        else if (this.layout === 1) {
            rect((width/2) - 360, height - 110, 720, 100)
        }

        // Display parts
        playbackSection.display();
        volumeSection.display();
        trackTitle.display();

    }

    this.input = function() {
        playbackSection.input();
        volumeSection.input();
    }
}
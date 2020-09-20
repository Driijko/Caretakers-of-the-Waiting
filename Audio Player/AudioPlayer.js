function AudioPlayer() {

    // Layout
    // The layout variable is assigned an integer which identifies
    // what type of layout we want for the audio player's display.
    // This value is passed on to each part of the audio player so that
    // each part positions itself accordingly.
    if (width <= 640) {
        this.layout = 0;
    }
    else {
        this.layout = 1;
    }
    

    // Create parts of audio player
    const playPauseButton = new PlayPauseButton(this.layout);
    const playblackSlider = new PlaybackSlider(this.layout);
    const timer = new Timer(this.layout);
    const muteFullVolumeButton = new MuteFullVolumeButton(this.layout);
    const volumeSlider = new VolumeSlider(this.layout);
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
            rect((width/2) - 310, height - 110, 620, 100)
        }

        // Display parts
        playPauseButton.display();
        playblackSlider.display();
        timer.display();
        muteFullVolumeButton.display();
        volumeSlider.display();
        trackTitle.display();

    }
}
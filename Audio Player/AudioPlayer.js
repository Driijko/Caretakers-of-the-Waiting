function AudioPlayer() {

    if (width <= 320) {
        this.layout = 0;
    }

    // Create parts of audio player
    const playPauseButton = new PlayPauseButton(this.layout);
    const playblackSlider = new PlaybackSlider(this.layout);
    const timer = new Timer(this.layout);
    const muteFullVolumeButton = new MuteFullVolumeButton(this.layout);
    const volumeSlider = new VolumeSlider(this.layout);

    this.display = function() {

        // Layout 0
        if (this.layout === 0) {

            // Audio Player outline
            stroke(255);
            strokeWeight(5);
            fill(0);
            rect(10, height - 180, 300, 170);

            strokeWeight(1);
            line(10, height - 110, 310, height - 110);
            line(10, height - 60, 310, height - 60);

            // Display parts
            playPauseButton.display();
            playblackSlider.display();
            timer.display();
            muteFullVolumeButton.display();
            volumeSlider.display();

        }

    }
}
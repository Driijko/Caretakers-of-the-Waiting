function PlaybackSection(layout) {
    this.layout = layout;

    const playPauseButton = new PlayPauseButton(layout);
    const playblackSlider = new PlaybackSlider(layout);
    const timer = new Timer(layout);

    this.display = function() {
        playPauseButton.display();
        playblackSlider.display();
        timer.display();
    }

    this.input = function() {
        
    }
}
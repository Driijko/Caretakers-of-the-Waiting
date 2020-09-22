function PlaybackSection(layout) {

    const playPauseButton = new PlayPauseButton(layout);
    const playbackSlider = new PlaybackSlider(layout);
    const timer = new Timer(layout);

    this.display = function() {
        playPauseButton.display();
        playbackSlider.display();
        timer.display();
    }

    this.input = function() {

        // Click play/pause button
        if (
            collidePointCircle(mouseX, mouseY, (width/2) + playPauseButton.xOffset + 20, height + playPauseButton.yOffset + 20, 40)
            && mouseIsPressed
            && mouse.readyForNextClick
        ) {
            mouse.click();
            if (playPauseButton.image === imPlayButton) {
                playPauseButton.image = imPauseButton;
            }
            else {
                playPauseButton.image = imPlayButton;
            }
        }

        // Move playback slider with mouse
        if (
            collidePointRect(mouseX, mouseY, (width/2) + playbackSlider.xOffset, height + playbackSlider.yOffset, 220, 20)
            && mouseIsPressed
        ) {
            mouse.click();
            playbackSlider.sliderX = mouseX;
        }
    }
}
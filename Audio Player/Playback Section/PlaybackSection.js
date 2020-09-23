function PlaybackSection(layout) {

    this.sliderDrag = false;

    const playPauseButton = new PlayPauseButton(layout);
    const playbackSlider = new PlaybackSlider(layout);
    const timer = new Timer(layout);

    this.display = function() {
        playPauseButton.display();
        playbackSlider.display();
        timer.display();
    }

    this.setTrack = function(track) {
        this.track = track;
        this.trackLength = Math.floor(track.duration());
        timer.setTrackLength(this.trackLength);
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
                this.track.play();
            }
            else {
                playPauseButton.image = imPlayButton;
                this.track.pause();
            }
        }

        // Move playback slider with mouse
        // Initial Click
        if (
            collidePointRect(mouseX, mouseY, (width/2) + playbackSlider.xOffset, height + playbackSlider.yOffset, 220, 20)
            && mouseIsPressed
            && mouse.readyForNextClick
        ) {
            mouse.click();
            playbackSlider.sliderX = mouseX;
            this.sliderDrag = true;
        }

        // Hold mouse button and drag slider
        if (this.sliderDrag) {
            if (!mouseIsPressed) {
                this.sliderDrag = false;
            }
            else if (
                mouseX > (width/2) + playbackSlider.sliderXMinOffset 
                && mouseX < (width/2) + playbackSlider.sliderXMaxOffset
            ) {
                playbackSlider.sliderX = mouseX
            }
        }
    }

    this.trackFollow = function() {
        if (this.track.isPlaying() && this.track.currentTime() > 0) {
            const currentTime = Math.floor(this.track.currentTime());
            timer.currentTime = currentTime;
            playbackSlider.sliderX = map(currentTime, 0, this.trackLength, (width/2) + playbackSlider.sliderXMinOffset, (width/2) + playbackSlider.sliderXMaxOffset);
        }
    }
}

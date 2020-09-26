function PlaybackSection(layout) {
 
    this.sliderDrag = false; // Set to "true" to allow user to drag slider with mouse
    this.trackWasPlaying = false; // Used for when track is paused while user drags slider

    // Create parts of playback section
    const playPauseButton = new PlayPauseButton(layout);
    const playbackSlider = new PlaybackSlider(layout);
    const timer = new Timer(layout);

    this.display = function() {
        playPauseButton.display();
        playbackSlider.display();
        timer.display();
    }

    // This function is called within the 'setTrack' function of the 
    // AudioPlayer object
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
                // We include this last method just in case the user dragged the slider
                // prior to hitting play.
                this.track.jump(timer.currentTime); 
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
            if (this.track.isPlaying()) {
                this.track.stop();
                this.trackWasPlaying = true;
            }
            else {
                this.trackWasPlaying = false;
            }

        }

        // Hold mouse button and drag slider
        if (this.sliderDrag) {
            if (!mouseIsPressed) {
                this.sliderDrag = false;
                this.track.jump(timer.currentTime);
                if (!this.trackWasPlaying) {
                    this.track.pause();
                }
            }
            else if (
                mouseX > (width/2) + playbackSlider.sliderXMinOffset 
                && mouseX < (width/2) + playbackSlider.sliderXMaxOffset
            ) {
                playbackSlider.sliderX = mouseX;
                timer.currentTime = Math.floor(map(playbackSlider.sliderX, (width/2) + playbackSlider.sliderXMinOffset, (width/2) + playbackSlider.sliderXMaxOffset, 0, this.trackLength));
            }
            else if (mouseX <= (width/2) + playbackSlider.sliderXMinOffset) {
                playbackSlider.sliderX = (width/2) + playbackSlider.sliderXMinOffset;
                timer.currentTime = 0;
            }
            else if (mouseX >= (width/2) + playbackSlider.sliderXMaxOffset) {
                playbackSlider.sliderX = (width/2) + playbackSlider.sliderXMaxOffset;
                timer.currentTime = this.trackLength;
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

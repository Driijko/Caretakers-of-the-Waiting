function VolumeSection(layout) {

    this.sliderDrag = false; // Set this to "true" to allow user to drag slider with mouse

    // Create parts of volume section
    const muteFullVolumeButton = new MuteFullVolumeButton(layout);
    const volumeSlider = new VolumeSlider(layout);

    this.display = function() {
        muteFullVolumeButton.display();
        volumeSlider.display();
        fill(255, 50);
    }

    this.input = function() {

        // Click on mute/fullVolume button ////////////////////////////////////////
        if (
            collidePointCircle(mouseX, mouseY, (width/2) + muteFullVolumeButton.xOffset + 20, height + muteFullVolumeButton.yOffset + 20, 40)
            && mouseIsPressed
            && mouse.readyForNextClick
        ) {
            mouse.click();
            if (muteFullVolumeButton.image === imMuteButton) {
                muteFullVolumeButton.image = imFullVolumeButton;
                volumeSlider.sliderX = (width/2) + volumeSlider.sliderXMinOffset;
                this.track.setVolume(0);
            }
            else {
                muteFullVolumeButton.image = imMuteButton;
                volumeSlider.sliderX = (width/2) + volumeSlider.sliderXMaxOffset;
                this.track.setVolume(1.0);
            }
        }

        // Move slider with mouse /////////////////////////////////////////////////
        // Initial click
        if (
            collidePointRect(mouseX, mouseY, (width/2) + volumeSlider.xOffset, height + volumeSlider.yOffset, 220, 20)
            && mouseIsPressed
            && mouse.readyForNextClick
        ) {
            mouse.click();
            volumeSlider.sliderX = mouseX;
            this.sliderDrag = true;
            this.track.setVolume(map(volumeSlider.sliderX, (width/2) + volumeSlider.sliderXMinOffset, (width/2) + volumeSlider.sliderXMaxOffset, 0.0, 1.0))
        }

        // Hold mouse button and drag slider
        if (this.sliderDrag) {
            if (!mouseIsPressed) {
                this.sliderDrag = false;
            }
            else if (
                mouseX > (width/2) + volumeSlider.sliderXMinOffset 
                && mouseX < (width/2) + volumeSlider.sliderXMaxOffset
            ) {
                volumeSlider.sliderX = mouseX;
                this.track.setVolume(map(volumeSlider.sliderX, (width/2) + volumeSlider.sliderXMinOffset, (width/2) + volumeSlider.sliderXMaxOffset, 0.0, 1.0))
            }
            else if (mouseX <= (width/2) + volumeSlider.sliderXMinOffset) {
                volumeSlider.sliderX = (width/2) + volumeSlider.sliderXMinOffset;
                this.track.setVolume(0);
            }
            else if (mouseX >= (width/2) + volumeSlider.sliderXMaxOffset) {
                volumeSlider.sliderX = (width/2) + volumeSlider.sliderXMaxOffset;
                this.track.setVolume(1);
            }
        }

        // Mute/FullVolume button reacts to slider position
        if (volumeSlider.sliderX > (width/2) + volumeSlider.xOffset) {
            muteFullVolumeButton.image = imMuteButton;
        }
        else {
            muteFullVolumeButton.image = imFullVolumeButton;
        }
    }
}
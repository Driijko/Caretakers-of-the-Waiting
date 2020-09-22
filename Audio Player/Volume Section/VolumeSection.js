function VolumeSection(layout) {

    this.sliderDrag = false;

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
            }
            else {
                muteFullVolumeButton.image = imMuteButton;
                volumeSlider.sliderX = (width/2) + volumeSlider.sliderXMaxOffset;
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
                volumeSlider.sliderX = mouseX
            }
        }

        // // Mute/FullVolume button reacts to slider position. ////////////////////
        if (volumeSlider.sliderX > (width/2) + volumeSlider.xOffset) {
            muteFullVolumeButton.image = imMuteButton;
        }
        else {
            muteFullVolumeButton.image = imFullVolumeButton;
        }
    }
}
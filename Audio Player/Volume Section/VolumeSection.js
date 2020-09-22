function VolumeSection(layout) {
    this.layout = layout;

    const muteFullVolumeButton = new MuteFullVolumeButton(this.layout);
    const volumeSlider = new VolumeSlider(this.layout);

    this.display = function() {
        muteFullVolumeButton.display();
        volumeSlider.display();
        fill(255, 50);
        // ellipse((width/2 + muteFullVolumeButton.xOffset) + 20, height + muteFullVolumeButton.yOffset + 20, 40)
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
        if (
            collidePointRect(mouseX, mouseY, (width/2) + volumeSlider.xOffset, height + volumeSlider.yOffset, 220, 20)
            && mouseIsPressed
        ) {
            mouse.click();
            volumeSlider.sliderX = mouseX;
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
function VolumeSection(layout) {
    this.layout = layout;

    const muteFullVolumeButton = new MuteFullVolumeButton(this.layout);
    const volumeSlider = new VolumeSlider(this.layout);

    this.display = function() {
        muteFullVolumeButton.display();
        volumeSlider.display();
        text(`${volumeSlider.sliderX}`, 200, 200)
    }

    this.input = function() {

        // Layout 0
        if (this.layout === 0) {

            // Click on mute/fullVolume button ////////////////////////////////////////
            if (
                collidePointCircle(mouseX, mouseY, (width/2) - 120, height - 85, 40)
                && mouseIsPressed
                && mouse.readyForNextClick
            ) {
                mouse.click();
                if (muteFullVolumeButton.image === imMuteButton) {
                    muteFullVolumeButton.image = imFullVolumeButton;
                    volumeSlider.sliderX = (width/2) - 85;
                }
                else {
                    muteFullVolumeButton.image = imMuteButton;
                    volumeSlider.sliderX = (width/2) + 135;
                }
            }

            // Move slider with mouse /////////////////////////////////////////////////
            if (
                collidePointRect(mouseX, mouseY, (width/2) - 85, height - 95, 220, 20)
                && mouseIsPressed
            ) {
                mouse.click();
                volumeSlider.sliderX = mouseX;
            }

            // Mute/FullVolume button reacts to slider position. ////////////////////
            if (volumeSlider.sliderX > (width/2) - 84) {
                muteFullVolumeButton.image = imMuteButton;
            }
            else {
                muteFullVolumeButton.image = imFullVolumeButton;
            }
        }
        // Layout 1
        else if (this.layout === 1) {

            // Click on mute/fullVolume button
            if (
                collidePointCircle(mouseX, mouseY, (width/2) + 100, height - 80, 40)
                && mouseIsPressed
                && mouse.readyForNextClick
            ) {
                mouse.click();
                if (muteFullVolumeButton.image === imMuteButton) {
                    muteFullVolumeButton.image = imFullVolumeButton;
                    volumeSlider.sliderX = (width/2) + 125;
                }
                else {
                    muteFullVolumeButton.image = imMuteButton;
                    volumeSlider.sliderX = (width/2) + 345;
                }  
            }

            if (
                collidePointRect(mouseX, mouseY, (width/2) + 125, height - 90, 220, 20)
                && mouseIsPressed
            ) {
                mouse.click();
                volumeSlider.sliderX = mouseX;
            }

            // Mute/FullVolume button reacts to slider position. ////////////////////
            if (volumeSlider.sliderX > (width/2) + 126) {
                muteFullVolumeButton.image = imMuteButton;
            }
            else {
                muteFullVolumeButton.image = imFullVolumeButton;
            }
        }
    }
}
function VolumeSection(layout) {
    this.layout = layout;

    const muteFullVolumeButton = new MuteFullVolumeButton(this.layout);
    const volumeSlider = new VolumeSlider(this.layout);

    this.display = function() {
        muteFullVolumeButton.display();
        volumeSlider.display();
    }

    this.input = function() {

        // Layout 0
        if (this.layout === 0) {

            // Click on mute/fullVolume button
            if (
                collidePointCircle(mouseX, mouseY, (width/2) - 120, height - 85, 40)
                && mouseIsPressed
                && mouse.readyForNextClick
            ) {
                mouse.click();
                if (muteFullVolumeButton.image === imMuteButton) {
                    muteFullVolumeButton.image = imFullVolumeButton;
                    volumeSlider.sliderX = (width/2) - 80;
                }
                else {
                    muteFullVolumeButton.image = imMuteButton;
                    volumeSlider.sliderX = (width/2) + 140;
                }
            }
        }
        if (
            ((
                this.layout === 0
                && collidePointCircle(mouseX, mouseY, (width/2) - 120, height - 85, 40)
            )
            ||
            (
                this.layout === 1
                && collidePointCircle(mouseX, mouseY, (width/2) + 100, height - 80, 40)
            ))
            && mouseIsPressed
            && mouse.readyForNextClick
        ) {
            mouse.click();
            if (muteFullVolumeButton.image === imMuteButton) {
                muteFullVolumeButton.image = imFullVolumeButton;
            }
            else {
                muteFullVolumeButton.image = imMuteButton;
            }
        }
    }
}
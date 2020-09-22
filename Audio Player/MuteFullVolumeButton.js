function MuteFullVolumeButton(layout) {

    this.layout = layout;

    this.display = function() {
        if (this.layout === 0) {
            image(imMuteButton, (width/2) - 140, height - 105, 40, 40)
        }
        else if (this.layout === 1) {
            image(imMuteButton, (width/2) + 80, height - 100, 40, 40)
        }
    }
}
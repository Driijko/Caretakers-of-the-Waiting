function MuteFullVolumeButton(layout) {

    // Ajdust to layout
    if (layout === 0) {
        this.x = 15;
        this.y = height - 105;
        this.size = 40;
    }

    this.display = function() {
        image(imMuteButton, this.x, this.y, this.size, this.size);
    }
}
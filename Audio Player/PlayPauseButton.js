function PlayPauseButton(layout) {

    this.layout = layout;

    this.display = function() {
        if (this.layout === 0) {
            image(imPlayButton, (width/2) - 140, height - 175, 40, 40);
        }
    }
}
function PlayPauseButton(layout) {

    if (layout === 0) {
        this.x = 15;
        this.y = height - 175;
        this.size = 40;
    }



    this.display = function() {
        if (layout === 0) {
            image(imPlayButton, this.x, this.y, this.size, this.size);
        }
    }
}
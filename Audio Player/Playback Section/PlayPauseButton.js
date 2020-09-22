function PlayPauseButton(layout) {

    this.layout = layout;
    if (layout === 0) {
        this.xOffset = -140;
        this.yOffset = -175;
    }
    else if (layout === 1) {
        this.xOffset = -350;
        this.yOffset = -100;
    }
    this.image = imPlayButton;

    this.display = function() {
        image(this.image, (width/2) + this.xOffset, height + this.yOffset, 40, 40);
    }
}
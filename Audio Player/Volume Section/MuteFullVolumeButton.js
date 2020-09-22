function MuteFullVolumeButton(layout) {

    if (layout === 0) {
        this.xOffset = -140;
        this.yOffset = -105;
    }
    else if (layout === 1) {
        this.xOffset = 70;
        this.yOffset = -100;
    }
    
    this.image = imFullVolumeButton;

    this.display = function() {
        image(this.image, (width/2) + this.xOffset, height + this.yOffset, 40, 40);
    }
}
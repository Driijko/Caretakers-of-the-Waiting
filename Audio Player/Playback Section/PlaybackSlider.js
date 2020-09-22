function PlaybackSlider(layout) {

    this.layout = layout;
    if (this.layout === 0) {
        this.sliderX = (width/2) + 100;
        this.xOffset = -85;
        this.yOffset = -165;
    }
    else if (this.layout === 1) {
        this.sliderX = (width/2) - 100;
        this.xOffset = -300;
        this.yOffset = -90;
    }
    

    this.display = function() {

        fill(0);
        strokeWeight(3);
        stroke(255);

        rect((width/2) + this.xOffset, height + this.yOffset, 220, 20);
        ellipse(this.sliderX, height + this.yOffset + 10, 20, 20);
    }
}
function PlaybackSlider(layout) {

    if (layout === 0) {
        this.sliderXMinOffset = -85;
        this.sliderXMaxOffset = 135;
        this.xOffset = -85;
        this.yOffset = -165;
    }
    else if (layout === 1) {
        this.sliderXMinOffset = -300;
        this.sliderXMaxOffset = -80;
        this.xOffset = -300;
        this.yOffset = -90;
    }

    this.sliderX = (width/2) + this.sliderXMinOffset;
    
    this.display = function() {
        fill(0);
        strokeWeight(3);
        stroke(255);

        rect((width/2) + this.xOffset, height + this.yOffset, 220, 20);
        ellipse(this.sliderX, height + this.yOffset + 10, 20, 20);
    }
}
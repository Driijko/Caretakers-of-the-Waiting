function VolumeSlider(layout) {

    if (layout === 0) {
        this.sliderXMaxOffset = 135;
        this.sliderXMinOffset = -85;       
        this.xOffset = -85;
        this.yOffset = -95;
    }
    else if (layout === 1) {
        this.sliderXMaxOffset = 345;
        this.sliderXMinOffset = 125;
        this.xOffset = 125;
        this.yOffset = -90;
    }

    this.sliderX = (width/2) + this.sliderXMaxOffset;

    this.display = function() {

        // Bar
        fill(0);
        strokeWeight(3);
        stroke(255);

        rect((width/2) + this.xOffset, height + this.yOffset, 220, 20);
        ellipse(this.sliderX, height + this.yOffset + 10, 20, 20);
    }
}
function PlaybackSlider(layout) {

    if (layout === 0) {
        this.sliderX = (width/2) + 100;
        this.xOffset = -85;
        this.yOffset = -165;
    }
    else if (layout === 1) {
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

    this.input = function() {
        if (
            ((
                this.layout === 0
                && collidePointRect(mouseX, mouseY, (width/2) - 80, height - 165, 220, 20)
            )
            ||
            (
                this.layout === 1
                && collidePointRect(mouseX, mouseY, (width/2) - 300, height - 90, 220, 20)
            ))
            && mouseIsPressed
        ) {
            this.sliderX = mouseX;
        }
    }
}
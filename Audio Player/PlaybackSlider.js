function PlaybackSlider(layout) {
    
    // Layout 0
    if (layout === 0) {
        this.barLength = 220;
        this.barX = (width/2) - 90;
        this.barY = 315;
    }

    this.display = function() {

        // Bar
        fill(0);
        strokeWeight(3);
        stroke(255);
        rect(this.barX, this.barY, this.barLength, 20);
    }
}
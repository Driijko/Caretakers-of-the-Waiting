function PlaybackSlider(layout) {
    
    // Layout 0
    if (layout === 0) {
        this.barLength = 220;
        this.barX = 80;
        this.barY = 285;
    }

    this.display = function() {

        // Bar
        strokeWeight(3);
        stroke(255);
        rect(this.barX, this.barY, this.barLength, 20);
    }
}
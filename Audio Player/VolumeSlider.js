function VolumeSlider(layout) {

    // Respond to layout
    if (layout === 0) {
        this.barLength = 220;
        this.barX = 80;
        this.barY = 385;
    }

    this.display = function() {

        // Bar
        fill(0);
        strokeWeight(3);
        stroke(255);
        rect(this.barX, this.barY, this.barLength, 20);
    }
}
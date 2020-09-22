function PlaybackSlider(layout) {

    this.layout = layout;

    this.display = function() {

        // Bar
        fill(0);
        strokeWeight(3);
        stroke(255);

        if (this.layout === 0) {
            rect((width/2) - 80, height - 165, 220, 20);
        }
        else if (this.layout === 1) {
            rect((width/2) - 300, height - 90, 220, 20);
        }
    }
}
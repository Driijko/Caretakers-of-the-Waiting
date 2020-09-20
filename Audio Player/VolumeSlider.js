function VolumeSlider(layout) {

    this.layout = layout;

    this.display = function() {

        // Bar
        fill(0);
        strokeWeight(3);
        stroke(255);

        if(this.layout === 0) {
            rect((width/2) - 80, height - 95, 220, 20);
        }
    }
}
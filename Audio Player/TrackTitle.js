function TrackTitle(layout) {

    this.layout = layout;
    this.trackTitle = "Caretakers of the Waiting Main Theme";
    

    this.display = function() {
        noStroke();
        fill(255);

        if (this.layout === 0) {
            textSize(17);
            text(this.trackTitle, (width/2) - 150, height - 60, 300, 50);
        }
        else if (this.layout === 1) {
            textSize(25);
            text(this.trackTitle, (width/2) - 300, height - 55, 600, 50);
        }
    }
}
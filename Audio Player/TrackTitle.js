function TrackTitle(layout) {

    this.layout = layout;
    this.trackTitle = "Caretakers of the Waiting Main Theme";
    

    this.display = function() {
        noStroke();
        fill(255);
        textSize(17);

        if (this.layout === 0) {
            text(this.trackTitle, (width/2) - 150, height - 60, 300, 50);
        }
    }
}
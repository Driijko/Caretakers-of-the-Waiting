function TrackTitle(layout) {

    this.trackTitle = "Caretakers of the Waiting Main Theme";
    
    // Respond to layout
    if (layout === 0) {
        this.x = (width/2) - 150;
        this.y = 420;
        this.length = 300;
    }

    this.display = function() {
        noStroke();
        fill(255);
        textSize(17);
        text(this.trackTitle, this.x, this.y, this.length, 50);
    }
}
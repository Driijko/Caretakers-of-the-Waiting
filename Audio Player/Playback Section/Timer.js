function Timer(layout) {

    this.currentTime = 0;

    if (layout === 0) {
        this.xOffset = -50;
        this.yOffset = -140;
    }
    else if (layout === 1) {
        this.xOffset = -75;
        this.yOffset = -95;
    }

    this.convertSecondsToTimeString = function(timeInSeconds) {
        const seconds = timeInSeconds % 60;
        const minutes = Math.floor(timeInSeconds / 60);
        return `${minutes}:${seconds < 10 ? 0 : ""}${seconds}`;
    }

    this.setTrackLength = function(trackLength) {
        this.trackLength = this.convertSecondsToTimeString(trackLength);
    }

    this.display = function() {
        textAlign(CENTER, CENTER);
        noStroke();
        textSize(20);
        fill(255);

        text(
            `${this.convertSecondsToTimeString(this.currentTime)} / ${this.trackLength}`, 
            (width/2) + this.xOffset, 
            height + this.yOffset, 
            150, 
            30
        );

    }
}
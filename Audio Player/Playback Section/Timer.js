function Timer(layout) {

    if (layout === 0) {
        this.xOffset = -50;
        this.yOffset = -140;
    }
    else if (layout === 1) {
        this.xOffset = -75;
        this.yOffset = -95;
    }

    this.convertSecondsToTimeString = function(timeInSeconds) {
        const minutes = timeInSeconds % 60;
        const seconds = Math.floor(timeInSeconds / 60);
        return `${minutes}:${seconds < 10 ? 0 : null}${seconds}`;
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
            `00:06 / ${this.trackLength}`, 
            (width/2) + this.xOffset, 
            height + this.yOffset, 
            150, 
            30
        );

    }
}
function TrackTitle(layout) {

    this.title = null;

    if (layout === 0) {
        this.xOffset = -150;
        this.yOffset = -60;
        this.textSize = 25;
        this.width = 300;
    }
    else if (layout === 1) {
        this.xOffset = -305;
        this.yOffset = -55;
        this.textSize = 35;
        this.width = 600;
    }

    this.setTrack = function(track) {
        if (track === audio[0]) {
            this.trackTitle = "Main Theme";
        }
        else if (track === audio[1]) {
            this.trackTitle = "ACT 1: Seeds";
        }
        else if (track === audio[2]) {
            this.trackTitle = "ACT 2: Seeds";
        }
        else if (track === audio[3]) {
            this.trackTitle = "ACT 3: Seeds";
        }
        else if (track === audio[4]) {
            this.trackTitle = "ACT 4: Seeds";
        }
        else if (track === audio[5]) {
            this.trackTitle = "ACT 5: Seeds";
        }
        // if (track === auThemeMusic) {
        //     this.trackTitle = "Main Theme";
        // }
        // else if (track === auAct1) {
        //     this.trackTitle = "ACT 1: Seeds";
        // }
        // else if (track === auAct2) {
        //     this.trackTitle = "ACT 2: Roots";
        // }
        // else if (track === auAct3) {
        //     this.trackTitle = "ACT 3: Sprouts"
        // }
        // else if (track === auAct4) {
        //     this.trackTitle = "ACT 4: Branches"
        // }
        // else if (track === auAct5) {
        //     this.trackTitle = "ACT 5: Trees"
        // }
    }
    
    
    this.display = function() {
        noStroke();
        fill(255);
        
        textSize(this.textSize);
        text(this.title, (width/2) + this.xOffset, height + this.yOffset, this.width, 50);
    }
}
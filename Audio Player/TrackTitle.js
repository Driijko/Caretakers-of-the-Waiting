function TrackTitle(layout) {

    this.title = "Main Theme";

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
    
    this.display = function() {
        noStroke();
        fill(255);
        
        textSize(this.textSize);
        text(this.title, (width/2) + this.xOffset, height + this.yOffset, this.width, 50);
    }
}
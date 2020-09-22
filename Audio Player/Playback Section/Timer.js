function Timer(layout) {

    if (layout === 0) {
        this.xOffset = -50;
        this.yOffset = -140;
    }
    else if (layout === 1) {
        this.xOffset = -75;
        this.yOffset = -95;
    }

    this.display = function() {
        textAlign(CENTER, CENTER);
        noStroke();
        textSize(20);
        fill(255);

        text("00:06 / 32: 38", (width/2) + this.xOffset, height + this.yOffset, 150, 30);

    }
}
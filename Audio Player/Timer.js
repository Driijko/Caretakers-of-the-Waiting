function Timer(layout) {

    if (layout === 0) {
        this.x = (width/2) - 80;
        this.y = 335;
        this.width = 200;
        this.height = 30;
    }

    this.display = function() {
        textAlign(CENTER, CENTER);
        noStroke();
        textSize(20);
        fill(255);
        text("00:06 / 32:38", this.x, this.y, this.width, this.height);
    }
}
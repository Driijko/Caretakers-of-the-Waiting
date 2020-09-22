function Timer(layout) {

    this.layout = layout;

    this.display = function() {
        textAlign(CENTER, CENTER);
        noStroke();
        textSize(20);
        fill(255);

        if (this.layout === 0) {
            text("00:06 / 32:38", (width/2) - 80, height - 140, 200, 30);
        }
        else if (this.layout === 1) {
            text("00:06 / 32: 38", (width/2) - 5, height - 80, )
        }
    }
}
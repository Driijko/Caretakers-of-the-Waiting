function FadeOut(x, y, width, height, time) {

    // Timer
    this.timer = 0;

    // Start fade out
    this.start = false;

    this.display = function() {
        if (this.start) {
            noStroke();
            fill(0, map(this.timer, 0, time, 0, 255));
            rect(x, y, width, height);
            this.timer++;
        }
    }
}
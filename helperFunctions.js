function collidePointRect(pointX, pointY, x, y, xW, yW) {
    //2d
    if (pointX >= x &&         // right of the left edge AND
        pointX <= x + xW &&    // left of the right edge AND
        pointY >= y &&         // below the top AND
        pointY <= y + yW) {    // above the bottom
            return true;
    }
    return false;
}

function transistionToFullScreen() {
    resizeCanvas(screen.width, screen.height);
    fullscreen(true);
}

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
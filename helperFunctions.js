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

function collidePointCircle(x, y, cx, cy, d) {
    //2d
    if( this.dist(x,y,cx,cy) <= d/2 ){
      return true;
    }
    return false;
}

function collidePointEllipse (x, y, cx, cy, dx, dy) {
    //2d
    let rx = dx/2, ry = dy/2;
    // Discarding the points outside the bounding box
    if (x > cx + rx || x < cx - rx ||y > cy + ry || y < cy - ry) {
          return false;
    }
    // Compare the point to its equivalent on the ellipse
    let xx = x - cx, yy = y - cy;
    let eyy = ry * this.sqrt(this.abs(rx * rx - xx * xx)) / rx;
    return yy <= eyy && yy >= -eyy;
  };

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
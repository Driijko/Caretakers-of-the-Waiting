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
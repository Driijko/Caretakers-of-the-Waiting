function Ring(startPoint) {
    this.y = startPoint;
    this.x = 0;
    this.xDir = 5;
    this.yDir = 0;
    this.frameCounter = 0;

    this.grow = function() {
        if (this.frameCounter < 60) {
            this.frameCounter++;
            this.x += this.xDir;
            this.y -= this.yDir;
            this.xDir -= 0.11;
            this.yDir += 0.11;
        }
    }

    this.display = function() {
        if (this.frameCounter < 60) {
            stroke(255);
            strokeWeight(10 - (this.frameCounter / 6));
            line(
                (width/2) + this.x, 
                this.y, 
                (width/2) + this.x + this.xDir,
                this.y + this.yDir
            );
            line (
                (width/2) - this.x, 
                this.y, 
                (width/2) - this.x - this.xDir,
                this.y + this.yDir
            )
        }
        else {
            // rect(50, 50, 50, 50);
        }
    }
}
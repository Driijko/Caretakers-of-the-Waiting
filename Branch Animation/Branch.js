function Branch(x, y, thickness, hDir, vDir) {
    this.hDir = hDir;
    this.vDir = vDir;
    this.x = x;
    this.y = y;
    this.frameCounter = 0;

    this.grow = function() {
        if (this.frameCounter < 50) {
            this.frameCounter++;
            this.x += this.hDir;
            this.y += this.vDir;

            const probabilityCounter = Math.floor(random(0, ));
            if (probabilityCounter === 0) {
                this.vDir *= -1;
            }
        }
    }

    this.display = function() {
        if (this.frameCounter < 50) {
            stroke(255);
            strokeWeight(thickness);
            line(this.x, this.y, this.x + this.hDir, this.y + this.vDir);
        }
    }
}
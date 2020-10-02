function Ring(startPoint) {
    this.y = startPoint;
    this.x = 0;
    this.xDir = 5;
    this.yDir = 0;
    this.frameCounter = 0;
    this.branches = [];

    this.grow = function() {
        if (this.frameCounter < 60) {
            this.frameCounter++;
            this.x += this.xDir;
            this.y -= this.yDir;
            this.xDir -= 0.11;
            this.yDir += 0.11;
        }
        // Create Branches
        if (this.frameCounter < 50) {
            const probabilityValue = Math.floor(random(0, 5));
            if (probabilityValue === 0) {
                this.branches.push(new Branch((width/2) + this.x, this.y, 12 - (this.frameCounter / 6)));
                this.branches.push(new Branch((width/2) - this.x, this.y, 12 - (this.frameCounter / 6)));
            }
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
        if (this.branches.length > 0) {
            this.branches.forEach(branch => {
                branch.display();
            })
        }
    }
}
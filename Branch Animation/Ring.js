function Ring(startPoint) {
    this.y = startPoint;
    this.x = 0;
    this.xDir = 5;
    this.yDir = 0;
    this.frameCounter = 0;
    this.branches = [];

    this.grow = function() {
        if (this.frameCounter < 120) {
            this.frameCounter++;
            if (frameCount % 2 === 0) {
                this.x += this.xDir;
                this.y -= this.yDir;
                this.xDir -= 0.11;
                this.yDir += 0.11;
            }
        }

        // Create Branches
        if (this.frameCounter < 120 && frameCount % 3 === 0) {
            this.branches.push(
                new Branch(
                    (width/2) + this.x,                                               
                    this.y,
                    3, 
                    (90 - (this.frameCounter * 2)) + (this.branches.length % 5 === 0 ? 180 : 0),  
                    random(150, 200)
                )
            );
            this.branches.push(
                new Branch(
                    (width/2 - this.x),
                    this.y,
                    3,
                    (90 + (this.frameCounter * 2)) + (this.branches.length % 5 === 0 ? 180: 0),
                    random(150, 200)
                )
            )
        }
    }

    this.display = function() {
        if (this.frameCounter < 120) {
            g.stroke(255, 60);
            g.strokeWeight(10 - ((this.frameCounter - 60) / 6));
            g.line(
                (width/2) + this.x, 
                this.y, 
                (width/2) + this.x + this.xDir,
                this.y + this.yDir
            );
            g.line (
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
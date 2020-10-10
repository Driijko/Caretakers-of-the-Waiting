function Ring(startPoint) {
    this.y = startPoint;
    this.x = 0;
    this.xDir = 5;
    this.yDir = 0;
    this.frameCounter = 0;
    this.branches = [];
    let branchCount = 0;

    this.grow = function() {
        if (this.frameCounter < 60) {
            this.frameCounter++;
            this.x += this.xDir;
            this.y -= this.yDir;
            this.xDir -= 0.11;
            this.yDir += 0.11;
        }

        // Create Branches
        if (this.frameCounter < 60 && frameCount % 3 === 0) {
            this.branches.push(
                new Branch(
                    (width/2) + this.x,                                               
                    this.y,
                    3, 
                    // 6 - int(this.frameCounter * 0.1), 
                    (90 - (this.frameCounter * 2)) + (this.branches.length % 5 === 0 ? 180 : 0),  
                    150
                )
            );
            this.branches.push(
                new Branch(
                    (width/2 - this.x),
                    this.y,
                    3,
                    (90 + (this.frameCounter * 2)) + (this.branches.length % 5 === 0 ? 180: 0),
                    150
                )
            )
        }
    }

    this.display = function() {
        if (this.frameCounter < 60) {
            g.stroke(255);
            g.strokeWeight(10 - (this.frameCounter / 6));
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
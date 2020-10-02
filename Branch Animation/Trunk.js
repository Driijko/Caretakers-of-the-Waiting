function Trunk(bottom, foundationWidth, height) {
    this.halfWidth = Math.floor(foundationWidth/2);
    this.foundationHeight = 0;
    this.maxFoundationHeight = height;
    this.bottom = bottom;
    this.lineHeight = 0;
    this.stage = "growing";

    this.grow = function() {
        if (this.foundationHeight < this.maxFoundationHeight) {
            this.foundationHeight++;
        }
        else if (this.lineHeight < (this.maxFoundationHeight / 2)) {
            this.lineHeight ++;
        }
        else {
            this.stage = "not growing";
        }        
    }

    this.display = function() {
        if (this.foundationHeight < this.maxFoundationHeight) {
            noStroke();
            fill(255);
            beginShape();
            vertex((width/2) - this.halfWidth, this.bottom);
            bezierVertex(
                (width/2) - this.halfWidth, 
                this.bottom, 
                (width/2) - 60, 
                this.bottom, 
                (width/2), 
                this.bottom - this.foundationHeight
            );
            bezierVertex(
                (width/2) + 60, 
                this.bottom, 
                (width/2) + this.halfWidth, 
                this.bottom, 
                (width/2) + this.halfWidth, 
                this.bottom
            );
            endShape(CLOSE);
        }
        else if (this.lineHeight < (this.maxFoundationHeight / 2)) {
            stroke(255);
            strokeWeight(10);
            noFill();
            line(
                (width/2), 
                this.bottom - this.maxFoundationHeight + 5,
                (width/2),
                this.bottom - this.maxFoundationHeight - this.lineHeight
            )
        }
    }
}
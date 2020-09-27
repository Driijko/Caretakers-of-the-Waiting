function Trunk(bottom, foundationWidth, height) {
    this.halfWidth = Math.floor(foundationWidth/2);
    this.foundationHeight = 0;
    this.maxFoundationHeight = height;
    this.bottom = bottom;

    this.grow = function() {
        if (this.foundationHeight < this.maxFoundationHeight) {
            this.foundationHeight++;
        }        
    }

    this.display = function() {
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
}
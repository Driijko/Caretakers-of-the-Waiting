function Trunk(bottom, foundationWidth, height) {
    const halfWidth = Math.floor(foundationWidth/2);
    this.trunkHeight = 0;
    this.maxTrunkHeight = height;
    this.bottom = bottom;
    this.lineHeight = 0;
    this.stage = "growing";

    this.grow = function() {
        if (this.trunkHeight < this.maxTrunkHeight) {
            if (frameCount % 2 === 0) {
                this.trunkHeight++;
            }
        }
        else {
            this.stage = "not growing";
        }        
    }

    this.display = function() {
        if (this.trunkHeight < this.maxTrunkHeight) {
            g.noStroke();
            g.fill(255);
            g.beginShape();
            g.vertex((width/2) - halfWidth, this.bottom);
            g.bezierVertex(
                (width/2) - halfWidth, 
                this.bottom, 
                (width/2) - 60, 
                this.bottom, 
                (width/2), 
                this.bottom - this.trunkHeight
            );
            g.bezierVertex(
                (width/2) + 60, 
                this.bottom, 
                (width/2) + halfWidth, 
                this.bottom, 
                (width/2) + halfWidth, 
                this.bottom
            );
            g.endShape(CLOSE);
        }
    }
}
function Tree() {

    // Position relative to audio player
    const apTop = height + audioPlayer.yOffset
    background(0);
    stroke(255);
    strokeWeight(5)
    line(10, apTop, width - 10, apTop);

    this.stage = "branch growth";

    // Trunk
    this.trunkHeight = 0;
    this.maxTrunkHeight = 40;

    // Branches
    this.branches = []; 
    const root = new Branch(100, 6, createVector((width/2), apTop - 40), createVector(0, -1));
    this.branches.push(root);

    this.grow = function() {
        this.branches.forEach(branch => {
            branch.grow();
        })
    }


    this.display = function() {
        if (this.stage === "trunk growth") {
            noStroke();
            fill(255);
            beginShape();
            vertex(15, apTop);
            bezierVertex(15, apTop, (width/2) - 60, apTop, (width/2), apTop - this.trunkHeight);
            bezierVertex((width/2) + 60, apTop, width - 15, apTop, width - 15, apTop)
            endShape(CLOSE);
            if (this.trunkHeight < this.maxTrunkHeight) {
                this.trunkHeight++;
            } 
            else {
                this.stage = "branch growth";
            }          
        }
        else if (this.stage === "branch growth") {
            this.branches.forEach(branch => {
                branch.display();
            })
        }
    }
}
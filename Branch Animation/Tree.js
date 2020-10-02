function Tree() {

    // Position relative to audio player
    const apTop = height + audioPlayer.yOffset
    background(0);
    stroke(255);
    strokeWeight(5)

    this.stage = "trunk growth";

    // Trunk
    this.trunkHeight = 0;
    this.maxTrunkHeight = 40;
    const trunk = new Trunk(apTop, 300, 40);

    // Branches
    this.branches = []; 
    const root = new Branch(20, 10, createVector((width/2), apTop - 35), createVector(0, -1));
    this.branches.push(root);

    this.grow = function() {
        if (this.stage === "trunk growth") {
            trunk.grow();
        }
        if (this.stage === "branch growth") {
            this.branches.forEach(branch => {
                branch.grow();
            })
        }
    }


    this.display = function() {
        if (this.stage === "trunk growth") {
            trunk.display();       
        }
    }
}
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

    // Ring
    const ring = new Ring(apTop - trunk.maxFoundationHeight - (trunk.maxFoundationHeight / 2));

    this.grow = function() {
        if (this.stage === "trunk growth") {
            trunk.grow();
            if (trunk.stage === "not growing") {
                this.stage = "ring growth";
            }
        }
        if (this.stage === "ring growth") {
            ring.grow();
        }   
    }


    this.display = function() {
        if (this.stage === "trunk growth") {
            trunk.display();       
        }
        else if (this.stage === "ring growth") {
            ring.display();
        }
    }
}
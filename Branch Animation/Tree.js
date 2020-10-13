function Tree() {

    // Position relative to audio player
    // const apTop = height + audioPlayer.yOffset
    const apTop = height - 190;

    this.stage = "trunk growth";

    // Trunk
    const trunk = new Trunk(apTop, 300, 40);

    // Ring
    const ring = new Ring(apTop - 45)

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
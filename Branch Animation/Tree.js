function Tree() {

    const apTop = height + audioPlayer.yOffset
    background(0);
    stroke(255);
    strokeWeight(5)
    line(10, apTop, width - 10, apTop);

    // Create leaves
    this.leaves = [];
    for (let i = 0 ; i < 10 ; i++) {
        this.leaves.push(
            createVector(
                random(((width/2) - 50), ((width/2) + 50)),
                random(0, apTop - 50)
            )
        )
        point(this.leaves[i].x, this.leaves[i].y);
    }

    // Leaf Distance
    const maxDist = 200;
    const minDist = 10;

    // Branches
    this.branches = [];
    const root = new Branch(null, createVector((width/2), apTop), createVector(0, -1));


    
    this.update = function() {

    }

    this.display = function() {
        
    }
}
function Tree() {

    const apTop = height + audioPlayer.yOffset
    background(0);
    stroke(255);
    strokeWeight(5)
    line(10, apTop, width - 10, apTop);

    // Stages
    this.stage = "trunk growth";

    // Trunk
    this.trunkHeight = 0;
    this.maxTrunkHeight = 50;

    // Create leaves
    this.leaves = [];
    for (let i = 0 ; i < 100 ; i++) {
        this.leaves.push(new Leaf(
            createVector(
                Math.floor(random(((width/2) - 150), ((width/2) + 150))),
                Math.floor(random(0, apTop - 150))
            ))
        )
        // point(this.leaves[i].pos.x, this.leaves[i].pos.y);
    }

    // Leaf Distance
    const maxDist = 50;
    const minDist = 10;

    // Branches
    this.branches = [];
    const root = new Branch(null, createVector((width/2), apTop - this.maxTrunkHeight), createVector(0, -1));
    this.branches.push(root);
    let current = root;

    let found = false;

    while (!found) {
        for (let i = 0; i < this.leaves.length; i++) {
            const d = p5.Vector.dist(current.pos, this.leaves[i].pos);
            if (d < maxDist) {
                found = true;
            }
        }

        if (!found) {
            const branch = current.next();
            current = branch;
            this.branches.push(current);
        }
    }

    this.update = function() {

    }

    this.grow = function() {
    
        for (let i = 0; i < this.leaves.length; i++) {
            const leaf = this.leaves[i];
            let closestBranch = null;
            let record = 100000;

            for (let j = 0; j < this.branches.length; j++) {
                const branch = this.branches[j];
                const d = p5.Vector.dist(leaf.pos, branch.pos);
                if (d < minDist) {
                    leaf.reached = true;
                    closestBranch = null;
                    break;
                }
                else if (d > maxDist) {

                }
                else if (closestBranch === null || d < record) {
                    closestBranch = branch;
                    record = d;
                }
            }

            if (closestBranch !== null) {
                let newDir = p5.Vector.sub(leaf.pos, closestBranch.pos);
                newDir.normalize();
                closestBranch.dir.add(newDir);
                closestBranch.count++;
            }

    
        }

        for (let i = this.leaves.length - 1; i >= 0; i--) {
            if (this.leaves[i].reached) {
                this.leaves.splice(i, 1);
            }
        }

        for (let i = this.branches.length - 1; i >= 0; i--) {
            const branch = this.branches[i];
            if (branch.count > 0) {
                branch.dir.div(branch.count);
                const newPos = p5.Vector.add(branch.pos, branch.dir);
                const newBranch = new Branch(branch, newPos, branch.dir.copy());
                this.branches.push(newBranch);
            }
            // branch.reset();
        }


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
            for (let i = 0; i < this.branches.length; i++) {
                this.branches[i].display();
            }
        }
    }
}
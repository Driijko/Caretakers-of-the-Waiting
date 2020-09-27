function Branch(parent, pos, dir) {
    this.pos = pos;
    this.parent = parent;
    this.dir = dir;
    this.count = 0;
    this.origDir = dir.copy();

    this.reset = function() {
        this.dir = this.origDir.copy();
        this.count = 0;
    }

    this.next = function() {
        const nextPos = p5.Vector.add(this.pos, this.dir);
        const nextBranch = new Branch(this, nextPos, this.dir.copy());
        return nextBranch;
    }

    this.display = function() {
        if (this.parent !== null) {
            stroke(255);
            strokeWeight(5)
            line(this.pos.x, this.pos.y, this.parent.pos.x, this.parent.pos.y);
        }
    }
}
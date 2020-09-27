function Branch(length, thickness, pos, dir) {
    this.thickness = thickness;
    this.pos = pos;
    this.length = 0;
    this.maxLength = length;
    this.dir = dir;

    

    this.grow = function() {
        // if (frameCount % this.thickness === 0) {
        //     this.dir.x += random(-1, 1);
        // }
        
        if (this.length < this.maxLength) {
            this.pos.x += this.dir.x;
            this.pos.y += this.dir.y;
            this.length++;
        }
    }

    this.display = function() {
        if (this.length < this.maxLength) {
            stroke(255);
            strokeWeight(this.thickness);
            line(this.pos.x, this.pos.y, this.pos.x + this.dir.x, this.pos.y + this.dir.y);
        }
    }
}
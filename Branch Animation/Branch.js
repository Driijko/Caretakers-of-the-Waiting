function Branch(x, y, thickness) {
    this.x = x;
    this.y = y;

    this.grow = function() {
        
    }

    this.display = function() {
        stroke(255, 0, 0);
        strokeWeight(thickness);
        point(this.x, this.y);
    }
}
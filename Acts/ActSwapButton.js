function ActSwapButton(dir) {
    const x1Offset = 50;
    const x2Offset = 20;
    const x3Offset = 10;
    if (dir === "right") {
        this.x1 = width - x1Offset;
        this.x2 = width - x2Offset
        this.x3 = width - x3Offset;
    }
    else if (dir === "left") {
        this.x1 = x1Offset;
        this.x2 = x2Offset;
        this.x3 = x3Offset;
    }

    this.topVertex = [this.x1, 50];
    this.midVertex1 = [this.x2, 150];
    this.midVertex2 = [this.x3, 150];
    this.bottomVertex = [this.x1, 250];

    this.frameCounter = 0;
    this.fill = "white";

    this.display = function() {
        stroke(0);
        strokeWeight(5);
        if (this.frameCounter % 60 === 0) {
            this.fill = "red";
        }
        if (this.frameCounter % 61 === 0) {
            this.fill = "white";
        }
        fill(this.fill);
        beginShape();
        vertex(this.topVertex[0], this.topVertex[1]);
        bezierVertex(
            this.midVertex1[0], this.midVertex1[1],
            this.midVertex1[0], this.midVertex1[1],
            this.bottomVertex[0], this.bottomVertex[1]
        );
        vertex(this.midVertex2[0], this.midVertex2[1]);
        endShape(CLOSE);

        this.frameCounter++;
    }


    
}
function CurveTest() {
    const center = createVector((width/2), (height/2));
    const centerLineLength = 100;
    let frameCounter = 0;
    this.pos = createVector(center.x, center.y);
    this.dir = p5.Vector.random2D();
    // this.dir.mult()
    this.pull = createVector(200, 200);

    noFill();

    stroke(0, 0, 255);
    strokeWeight(20);
    line(center.x, center.y, center.x + (centerLineLength * this.dir.x), center.y + (centerLineLength * this.dir.y));

    stroke(255, 0, 0);
    strokeWeight(20);
    point(center.x, center.y);
    point(this.pull.x, this.pull.y);
    
    // this.changePull = function() {
        
    // }
    
    this.display = function() {



        if (frameCounter < 500) {

            if (frameCount % 10 === 0) {
                this.dir.normalize();
                this.dir.x += 0.5;
            }
            frameCounter++;
            stroke(255);
            strokeWeight(5);
            line(this.pos.x, this.pos.y, this.pos.x + this.dir.x, this.pos.y + this.dir.y);
            this.pos.add(this.dir);
        }


    }
}
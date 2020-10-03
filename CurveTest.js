function CurveTest() {
    const center = createVector((width/2), (height/2));
    let frameCounter = 0;
    this.pos = createVector(center.x, center.y);
    let angle = 90;
    const angleRange = 100;
    const angleMin = angle - int(angleRange/2);
    const angleMax = angle + int(angleRange/2);
    const angleCorrect = 20;
    let angleChange = int(random(-10, 10));
    let speed = 1;
    this.dir = p5.Vector.fromAngle(radians(angle)).mult(speed);

    // noFill();
    // smooth();

    // stroke(255, 0, 0);
    // strokeWeight(20);
    // point(center.x, center.y);
    
    this.display = function() {

        if (frameCounter < 2000) {

            if (frameCount % 10 === 0) {
                angle += angleChange;
                if (angle < angleMin) {
                    angle += angleCorrect;
                }
                else if (angle > angleMax) {
                    angle -= angleCorrect;
                }
                this.dir = p5.Vector.fromAngle(radians(angle)).mult(speed);
            }

            if (frameCount % 50 === 0) {
                angleChange = random(-10, 10);
            }

            frameCounter++;

            stroke(255);
            strokeWeight(5);
            line(this.pos.x, this.pos.y, this.pos.x + this.dir.x, this.pos.y + this.dir.y);
            this.pos.add(this.dir);
        }


    }
}
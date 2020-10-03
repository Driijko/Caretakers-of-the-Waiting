function Branch(x, y, thickness, ang, len) {

    let pos = createVector(x, y);
    let pos2 = createVector((width/2) - (x - (width/2)), y);

    let speed = 1;
    const angleRange = 300;

    const angleCorrect = 20;
    let angleChange = int(random(-50, 50));

    let angle = ang;
    let dir = p5.Vector.fromAngle(radians(angle)).mult(speed);
    const angleMin = angle - int(angleRange/2);
    const angleMax = angle + int(angleRange/2);

    let branches = [];
    
    const length = len;
    let frameCounter = 0;


    this.display = function() {

        if (frameCounter < length) {
            frameCounter++;

            if (frameCount % 10 === 0) {

                angleChange = random(-20, 20);
                
                angle += angleChange;
                if (angle < angleMin) {
                    angle += angleCorrect;
                }
                else if (angle > angleMax) {
                    angle -= angleCorrect;
                }
                dir = p5.Vector.fromAngle(radians(angle)).mult(speed);
            }

            if (frameCount % 50 === 0) {
                if (length > 100) {
                    branches.push(new Branch(pos.x, pos.y, thickness, angle, length - 30))
                }
            }

            strokeWeight(thickness);
            stroke(255, 50);
            line(pos.x, pos.y, pos.x + dir.x, pos.y + dir.y);
            pos.add(dir);

            if (branches.length > 0) {
                branches.forEach(branch => {
                    branch.display();
                })
            }
        }

    }
}
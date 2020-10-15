function Act(num, title) {
    let frameCounter = 0;
    const delay = 80;
    let alpha = 0;
    this.num = num;
    this.title = title;

    this.display = function() {

        if (frameCounter <= delay) {
            frameCounter++;
        }

        if (frameCounter > delay) {
            if (alpha < 255) {
                alpha += 1;
            }
    
            ellipseMode(CENTER);
            stroke(255, alpha);
            strokeWeight(2);
            fill(0, alpha - 60);
            ellipse((width/2), 150, 200, 150);
    
            textAlign(CENTER, CENTER);
            textSize(25);
            noStroke();
            fill(255, alpha);
            text(`Act ${this.num}`, (width/2) - 100, 70, 200, 100);
    
            textSize(40);
            text(`${this.title}`, (width/2) - 95, 120, 200, 100);
        }
    }
}
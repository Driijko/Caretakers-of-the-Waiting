function AudioPlayer() {

    if (width <= 320) {
        this.layout = 0;
    }



    this.display = function() {

        // Layout 0
        if (this.layout === 0) {
            stroke(255);
            strokeWeight(5);
            fill(0);
            rect(10, height - 210, 300, 200);
        }

    }
}
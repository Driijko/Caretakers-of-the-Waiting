function VolumeSlider(layout) {

    this.layout = layout;
    if (this.layout === 0) {
        this.sliderX = (width/2) + 100;
    }
    else if (this.layout === 1) {
        this.sliderX = (width/2) + 300;
    }

    this.display = function() {

        // Bar
        fill(0);
        strokeWeight(3);
        stroke(255);

        if(this.layout === 0) {
            rect((width/2) - 85, height - 95, 220, 20);
            ellipse(this.sliderX, height - 85, 20, 20);
        }
        else if(this.layout === 1) {
            rect((width/2) + 125, height - 90, 220, 20);
            ellipse(this.sliderX, height - 80, 20, 20);
        }
    }

    this.input = function() {
        if (
            ((
                this.layout === 0
                && collidePointRect(mouseX, mouseY, (width/2) - 85, height - 95, 220, 20)
            )
            ||
            (
                this.layout === 1
                && collidePointRect(mouseX, mouseY, (width/2) + 125, height - 90, 220, 20)
            ))
            && mouseIsPressed
        ) {
            this.sliderX = mouseX;
        }
    }
}
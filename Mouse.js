function Mouse() {
    this.clicked = false;
    this.readyForNextClick = true;

    this.input = function() {
        if (mouseIsPressed) {
            if (this.clicked === false && this.readyForNextClick) {
                this.clicked = true;
                this.readyForNextClick = false;
            }
            else if (this.clicked) {
                this.clicked = false;
            }
        }
    }
}

function mouseReleased() {
    mouse.readyForNextClick = true;
}
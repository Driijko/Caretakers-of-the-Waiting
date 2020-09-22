function Mouse() {
    this.clicked = false;
    this.readyForNextClick = true;

    this.click = function() {
        this.readyForNextClick = false;
    }
}

function mouseReleased() {
    mouse.readyForNextClick = true;
}
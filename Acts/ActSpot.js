function ActSpot() {
    this.content = new Act("1", "Seeds");
    this.actSwapButtonLeft = new ActSwapButton("left");
    this.actSwapButtonRight = new ActSwapButton("right");

    this.input = function() {
        this.content.input();
    }

    this.display = function() {

        if (this.content.num !== 1) {
            this.actSwapButtonLeft.display();
        }

        if (this.content.num !== 0) {
            this.actSwapButtonRight.display();
        }
        
        this.content.display();
    }
}
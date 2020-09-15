// Initialize Variables
let mode;
let openingPrompts;

function preload() {

}



function setup() {

  // Initial view
  document.documentElement.style.overflow = "hidden";
  createCanvas(windowWidth, windowHeight);
  background(0);

  // Define Variables
  openingPrompts = new OpeningPrompts();
  mode = "openingPrompts";
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {

  background(0);

  if (mode === "openingPrompts") {
    openingPrompts.display();
  }
}
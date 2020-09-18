// Initialize Variables
let mode;
let openingPrompts;

// Audio
let auStartButton;

function preload() {
  auStartButton = loadSound("./assets/audio/startButton.wav");
}



function setup() {

  // Initial view
  document.documentElement.style.overflow = "hidden";
  createCanvas(windowWidth, windowHeight);

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
    openingPrompts.input();
  }
}
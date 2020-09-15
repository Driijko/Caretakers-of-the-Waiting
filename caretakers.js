// Initialize Variables
let mode;
let openingPrompts;
let windowObj;

function preload() {

}

function setup() {

  // Initial view
  document.documentElement.style.overflow = "hidden";
  createCanvas(windowWidth, windowHeight);
  background(0);

  // Define Variables
  openingPrompts = new OpeningPrompts();
  windowObj = new Window();
  windowObj.set();
  window.addEventListener("resize", ()=> {}));

  mode = "openingPrompts";
}



function draw() {


  if (mode === "openingPrompts") {
    openingPrompts.display();
    text(`${windowObj.verCenter}`, 50, 50);
  }
}
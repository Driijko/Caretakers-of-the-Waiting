function OpeningPrompts() {
  
  // Create Prompts
  const fullScreenPrompt = new Prompt("Enable Fullscreen?", 0);
  const audioPrompt = new Prompt("Enable Audio?", 150);

  this.display = function() {

    // Display prompts
    fullScreenPrompt.display();
    audioPrompt.display();

    // Start Button Outline
    strokeWeight(5);
    stroke(255);
    fill(0);
    rect((width/2) - 100, (height/2) + 120, 200, 75, 100);

    // Start Button Text
    noStroke();
    fill(255);
    textSize(40);
    text("START", (width/2) - 100, (height/2) + 120, 200, 75);  

  }

  this.input = function() {

    // Prompt Inputs
    fullScreenPrompt.input();
    audioPrompt.input();
    
  }

}